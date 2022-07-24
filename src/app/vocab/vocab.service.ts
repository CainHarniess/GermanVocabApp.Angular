import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { VocabList } from './models/vocab-list.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  constructor(private http: HttpClient) { }

  public get(): Observable<VocabList[]> {
    return this.http.get<VocabList[]>("/api/vocab-lists");
  }
}
