import { Injectable } from '@angular/core';

import { GuidGeneratorService } from '../../shared/services/guid-generator.service';
import { VocabListService } from './vocab-list.service';

import { map, Observable, of, tap } from 'rxjs';
import { delay } from 'rxjs/operators';
import { VocabList } from '../models/vocab-list.interface';
import { NotFoundError } from '../../../core/exceptions'
import { isNullOrUndefined } from '../../../utilities';
import { VocabListItem } from '../models';
import { InMemoryDataSeeder } from './in-memory-data-seeder.service';

@Injectable()
export class InMemoryVocabListService extends VocabListService {
  public readonly seedData: VocabList[]; 

  constructor(private guidGenerator: GuidGeneratorService, inMemoryDataSeeder: InMemoryDataSeeder) {
    super();
    this.seedData = inMemoryDataSeeder.seed();
  }

  public override get(): Observable<VocabList[]> {
    return of(this.seedData)
      .pipe(
        delay(500),
      );
  }

  public override getWithId(vocabListId: string): Observable<VocabList> {
    const index: number = this.seedData.findIndex(vl => vl.id === vocabListId);

    if (index === -1) {
      throw new NotFoundError(`Vocab list with ID ${vocabListId} not found in in-memory array.`);
    }

    return of(this.seedData[index])
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

    this.seedData.push(vocabList);
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
}


