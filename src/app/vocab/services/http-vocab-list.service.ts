import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { NotificationService } from '../../../core';

import { VocabList, VocabListItem } from '../models';
import { VocabListService } from './vocab-list.service';

// TODO: Provide this in the vocab module only.
// TODO: Rename this (and base) to "VocabService".
@Injectable({ providedIn: "root" })
export class HttpVocabListService extends VocabListService {

  constructor(private readonly http: HttpClient,
    private readonly notificationService: NotificationService) {
    super();
  }

  private readonly url: string = "/api/vocab-lists";

  public override get(): Observable<VocabList[]> {
    return this.http.get<VocabList[]>(this.url)
      .pipe(
        catchError((e: any, caught: Observable<VocabList[]>) => {
          const message: string = "Unable to retrieve vocab lists.";

          if (e instanceof HttpErrorResponse) {
            const notification: string = `${message}\r\n${e.status} ${e.statusText}\r\n${e.message}`;
            this.notificationService.error(notification);
            return throwError(() => new Error(notification));
          }

          this.notificationService.error(message);
          const error: Error = new Error(message)
          return throwError(() => error);
        }),
      );
  }

  public override getWithId(vocabListId: string): Observable<VocabList> {
    return this.http.get<VocabList>(this.url + `/${vocabListId}`);
  }

  public override add(vocabList: VocabList): Observable<string> {
    return this.http.post<string>(this.url, vocabList);
  }

  public override addListItem(listItem: VocabListItem, listId: string): Observable<string> {
    return this.http.post<string>(this.url + `/${listId}`, listItem);
  }

  public override update(id: string, updatedList: VocabList): Observable<void> {
    return this.http.put<void>(`${this.url}/${id!}`, updatedList);
  }
}
