import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { VocabList } from './models/vocab-list.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  constructor(private http: HttpClient) { }

  private readonly url: string = "/api/vocab-lists";

  public get(): Observable<VocabList[]> {
    return this.http.get<VocabList[]>(this.url);
  }

  public add(vocabList: VocabList): Observable<string> {
    return this.http.post<string>(this.url, vocabList);
  }
}
