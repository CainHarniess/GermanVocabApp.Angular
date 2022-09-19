import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { VocabList, VocabListItem } from '../models';
import { VocabListService } from './vocab-list.service';

@Injectable({ providedIn: "root" })
export class HttpVocabListService extends VocabListService {

  constructor(private http: HttpClient) {
    super();
  }

  private readonly url: string = "/api/vocab-lists";

  public override get(): Observable<VocabList[]> {
    return this.http.get<VocabList[]>(this.url);
  }

  public override getWithId(vocabListId: string): Observable<VocabList> {
    return this.http.get<VocabList>(this.url + `/${ vocabListId }`);
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
