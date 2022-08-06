import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { VocabList } from '../models/vocab-list.interface';
import { VocabListService } from './vocab-list.service';

import { combineLatest, map, Observable } from 'rxjs';
import { Noun } from '../models/noun.interface';

@Injectable({
  providedIn: 'root'
})
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

  public override getListItems(vocabListId: string): Observable<Noun[]> {
    return this.http.get<Noun[]>("/api/nouns" + `/${vocabListId}`)
  }

  public override add(vocabList: VocabList): Observable<string> {
    return this.http.post<string>(this.url, vocabList);
  }
}
