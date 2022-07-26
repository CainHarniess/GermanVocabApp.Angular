import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

import { VocabList, VocabListItem } from '../models';
import { HttpErrorHandler } from './http-error-handler';
import { VocabService } from '.';

@Injectable()
export class HttpVocabService extends VocabService {
  public constructor(private readonly http: HttpClient,
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

  // TODO: Update to return Observable<VocabList> because this is what the API returns.
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
  // Looks like there are just tests for this. Need to ensure it's not actually a helper function for tests or something.
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
