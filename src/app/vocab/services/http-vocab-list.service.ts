import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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

          if (!(e instanceof HttpErrorResponse)) {
            return this.handleNonHttpError(e, "Unable to retrieve vocab lists due to non-HTPP error");
          }
          const notification: string = `${message}. ${e.status} ${e.statusText}.`;
          this.notificationService.error(notification);
          return throwError(() => new Error(notification));
        }),
      );
  }

  public override getWithId(vocabListId: string): Observable<VocabList> {
    return this.http.get<VocabList>(this.url + `/${vocabListId}`)
      .pipe(
        catchError((e: any, caught: Observable<VocabList>) => {

          if (!(e instanceof HttpErrorResponse)) {
            return this.handleNonHttpError(e, "Unable to retrieve vocab list due to non-HTTP error.");
          }

          let message: string;
          if (e.status === HttpStatusCode.NotFound) {
            message = `Unable to find list with ID ${vocabListId}`;
          } else {
            message = `Error occured retrieving list with ID ${vocabListId}.`;
          }

          const notification: string = `${message}. ${e.status} ${e.statusText}`;
          this.notificationService.error(notification);
          return throwError(() => new Error(notification));
        }),
      );
  }

  public override add(vocabList: VocabList): Observable<string> {
    return this.http.post<string>(this.url, vocabList);
    // TODO: handle bad request
    // TODO: Handle 500 error with no primary key
  }

  // TODO: remove because not used?
  public override addListItem(listItem: VocabListItem, listId: string): Observable<string> {
    return this.http.post<string>(this.url + `/${listId}`, listItem);
  }

  public override update(id: string, updatedList: VocabList): Observable<void> {
    return this.http.put<void>(`${this.url}/${id!}`, updatedList);
    // TODO: handle bad request
    // TODO: handle not found
    // TODO: Handle 500 error execpected primary key
  }

  private handleNonHttpError(e: any, userMessage: string) {
    this.notificationService.error(userMessage);
    const error: Error = new Error(userMessage)
    return throwError(() => error);
  }
}
