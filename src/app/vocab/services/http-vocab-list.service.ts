import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { NotificationService } from '../../../core';

import { VocabList, VocabListItem } from '../models';
import { HttpErrorHandler } from './http-error-handler';
import { VocabListService } from './vocab-list.service';

// TODO: Provide this in the vocab module only.
// TODO: Rename this (and base) to "VocabService".
@Injectable({ providedIn: "root" })
export class HttpVocabListService extends VocabListService {

  constructor(private readonly http: HttpClient,
    private readonly notificationService: NotificationService,
    private readonly errorHandler: HttpErrorHandler) {
    super();
  }

  private readonly url: string = "/api/vocab-lists";

  public override get(): Observable<VocabList[]> {
    return this.http.get<VocabList[]>(this.url)
      .pipe(
        catchError((e: any, caught: Observable<VocabList[]>) =>
          this.errorHandler.handle(e, (e: any) => "Unable to retrieve vocab lists.")),
      );
  }

  public override getWithId(vocabListId: string): Observable<VocabList> {
    return this.http.get<VocabList>(this.url + `/${vocabListId}`)
      .pipe(
        catchError((e: any, caught: Observable<VocabList>) => {
          return this.errorHandler.handle(e, (e: any) => {
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
          return this.errorHandler.handle(e, (e: any) => {
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
          return this.errorHandler.handle(e, (e: any) => {
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
}
