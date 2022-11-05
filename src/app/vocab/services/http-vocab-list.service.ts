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
          return this.handleError(e, (e: any) => {
            return "Unable to retrieve vocab lists.";
          });
        }),
      );
  }

  public override getWithId(vocabListId: string): Observable<VocabList> {
    return this.http.get<VocabList>(this.url + `/${vocabListId}`)
      .pipe(
        catchError((e: any, caught: Observable<VocabList>) => {
          return this.handleError(e, (e: any) => {
            if (e.status === HttpStatusCode.NotFound) {
              return `Unable to find list with ID ${vocabListId}`;
            } else {
              return `Error occured retrieving list with ID ${vocabListId}.`;
            }
          });
        }),
      );
  }

  public override add(vocabList: VocabList): Observable<string> {
    return this.http.post<string>(this.url, vocabList)
      .pipe(
        catchError((e: any, caught: Observable<string>) => {
          return this.handleError(e, (e: any) => {
            if (e.status === HttpStatusCode.BadRequest) {
              return "Invalid list data provided";
            } else {
              return "Error occured when creating list";
            }
          });
        }),
      );
  }

  // TODO: remove because not used?
  public override addListItem(listItem: VocabListItem, listId: string): Observable<string> {
    return this.http.post<string>(this.url + `/${listId}`, listItem);
  }

  public override update(id: string, updatedList: VocabList): Observable<void> {
    return this.http.put<void>(`${this.url}/${id!}`, updatedList)
      .pipe(
        catchError((e: any, caught: Observable<void>) => {
          return this.handleError(e, (e: any) => {
            if (e.status === HttpStatusCode.BadRequest) {
              return "Invalid list data provided";
            } else if (e.status === HttpStatusCode.NotFound) {
              return `Unable to find list with ID ${id}`;
            } else {
              return "Error occured when creating list";
            }
          });
        }),
      );
  }

  private handleError(e: any, messageGenerator: (e: any) => string): Observable<never> {
    if (!(e instanceof HttpErrorResponse)) {
      return this.handleNonHttpError(e, "Unable to retrieve vocab list due to non-HTTP error.");
    }

    let message: string = messageGenerator(e);

    const notification: string = `${e.status} ${e.statusText}. ${message}.`;
    this.notificationService.error(notification);
    return throwError(() => new Error(notification));
  }

  private handleNonHttpError(e: any, userMessage: string): Observable<never> {
    this.notificationService.error(userMessage);
    const error: Error = new Error(userMessage)
    return throwError(() => error);
  }
}
