import { Injectable } from '@angular/core';

import { GuidGeneratorService } from '../../shared/services/guid-generator.service';

import { EMPTY, map, Observable, of, tap } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NotFoundError, UnexpectedIdError } from '../../../core/errors';
import { isNullOrUndefined } from '../../../utilities';
import { VocabList, VocabListItem } from '../models';
import { InMemoryDataProvider, VocabService } from '.';

@Injectable()
export class InMemoryVocabService extends VocabService {
  public readonly lists: VocabList[]; 

  constructor(private guidGenerator: GuidGeneratorService,
    inMemoryDataProvider: InMemoryDataProvider) {
    super();
    this.lists = inMemoryDataProvider.seed();
  }

  public override get(): Observable<VocabList[]> {
    return of(this.lists)
      .pipe(
        delay(500),
      );
  }

  public override getWithId(id: string): Observable<VocabList> {
    const index: number = this.findIndex(id);

    return of(this.lists[index])
      .pipe(
        delay(500),
      );
  }

  public override add(vocabList: VocabList): Observable<string> {
    vocabList.id = this.guidGenerator.generate();

    vocabList.listItems.forEach(li => {
      li.id = this.guidGenerator.generate();
      li.vocabListId = vocabList.id;
    });

    this.lists.push(vocabList);
    return of(vocabList.id);
  }

  public override addListItem(listItem: VocabListItem, listId: string): Observable<string> {
    if (!isNullOrUndefined(listItem.id)) {
      throw new Error(`Item already has ID ${listItem.id}.`);
    }

    if (!isNullOrUndefined(listItem.vocabListId)) {
      throw new Error(`Item already belongs to list with ID ${listItem.vocabListId}.`);
    }

    let vocabList$: Observable<VocabList>;
    try {
      vocabList$ = this.getWithId(listId);
    } catch (e) {
      throw e;
    }

    listItem.id = this.guidGenerator.generate();

    return vocabList$
      .pipe(
        tap((list: VocabList) => list.listItems.push(listItem)),
        map((list: VocabList) => listItem.id!),
      );
  }

  public override update(id: string, updatedList: VocabList): Observable<void> {
    if (!updatedList.id) {
      throw new UnexpectedIdError(`Vocab list it ID ${updatedList.id} provided when an a null or undefined value is expected.`);
    }
    const index: number = this.findIndex(id);
    updatedList.id = id;
    this.lists[index] = updatedList;
    return EMPTY;
  }

  private findIndex(id: string): number {
    const index: number = this.lists.findIndex(vl => vl.id === id);

    if (index === -1) {
      throw new NotFoundError(`Vocab list with ID ${id} not found in in-memory array.`);
    }
    return index;
  }
}
