import { Injectable } from '@angular/core';

import { GuidGeneratorService } from '../../shared/services/guid-generator.service';

import { map, Observable, of, tap, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { InMemoryDataProvider, VocabService } from '.';
import { NotFoundError } from '../../../core/errors';
import { isNullOrUndefined } from '../../../utilities';
import { VocabList, VocabListItem } from '../models';
import { NotificationService } from '../../../core';
import { AuthenticationService } from '../../authentication/services';
import { User } from '../../shared/models';

@Injectable()
export class InMemoryVocabService extends VocabService {
  private readonly delayMs: number = 500;
  public readonly lists: VocabList[];

  constructor(private readonly guidGenerator: GuidGeneratorService,
    private readonly notificationService: NotificationService,
    private readonly authenticationService: AuthenticationService,
    inMemoryDataProvider: InMemoryDataProvider) {
    super();
    this.lists = inMemoryDataProvider.seed();
  }

  public override get(userId: string): Observable<VocabList[]> {
    return of(this.lists)
      .pipe(
        delay(this.delayMs),
        map((lists: VocabList[]) => {
          return lists.filter((l: VocabList) => l.userId === userId);
        }),
        catchError((e: any, caught: Observable<VocabList[]>) => {
          this.notificationService.error("Unable to retrieve vocab lists.");
          return throwError(() => e);
        }),
      );
  }

  public override getWithId(id: string): Observable<VocabList> {
    return of(id)
      .pipe(
        delay(this.delayMs),
        map((id: string) => this.findIndex(id)),
        map((index: number) => this.lists[index]),
        catchError((e: any, caught: Observable<VocabList>) => {
          this.notificationService.error(`Unable to find list with ID ${id}`);
          return throwError(() => e);
        }),
      );
  }

  public override add(vocabList: VocabList): Observable<string> {
    return of(vocabList)
      .pipe(
        delay(this.delayMs),
        tap((vl: VocabList) => vl.id = this.guidGenerator.generate()),
        tap((vl: VocabList) => vl.listItems.forEach(li => {
          li.id = this.guidGenerator.generate();
          li.vocabListId = vl.id;
        })),
        tap((vl: VocabList) => this.lists.push(vl)),
        map((vl: VocabList) => vl.id!),
        catchError((e: any, caught: Observable<string>) => {
          this.notificationService.error(`Error occured when creating list ${vocabList.name}`);
          return throwError(() => e);
        }),
      );
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

  public override update(listId: string, updatedList: VocabList): Observable<void> {
    return of(listId)
      .pipe(
        delay(this.delayMs),
        tap((id: string) => updatedList.id = id),
        map((id: string) => this.findIndex(id)),
        tap((index: number) => this.lists[index] = updatedList),
        map((index: number) => void 0),
        catchError((e: any, caught: Observable<void>) => {
          this.notificationService.error(`Error occured when updating list ${updatedList.name}`);
          return throwError(() => e);
        }),
      );
  }

  private findIndex(id: string): number {
    const index: number = this.lists.findIndex(vl => vl.id === id);

    if (index === -1) {
      throw new NotFoundError(`Vocab list with ID ${id} not found in in-memory array.`);
    }
    return index;
  }
}
