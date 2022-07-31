import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";

import { VocabList } from "../models/vocab-list.interface";

import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class InMemoryVocabListDataService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo | undefined): Observable<{ "vocab-lists": VocabList[] }> {
    const vocabLists: VocabList[] = [
      { id: "7d5386ba-16a3-423b-ecd4-08da6cfa8c96", name: "Kitchen", description: "A collection of common kitchen items." },
      { id: "8b79c834-0a5f-449c-ecd5-08da6cfa8c96", name: "Der Prozess", description: "Words picked up from reading Der Process by Franz Kafka." },
      { id: "37b25d15-367e-4f2a-6bc0-08da6d0685eb", name: "Bathroom", description: undefined },
      { id: "57efe56f-f9af-457b-14fe-08da6d07663c", name: "Idioms", description: "Phrases that should not be translated literally." },
    ];
    const db: { "vocab-lists": VocabList[] } = { "vocab-lists": vocabLists };

    return of(db)
      .pipe(
        delay(500)
      );
  }

  genId<T extends { id: any }>(collection: T[], collectionName: string): any {
    return generateGuid();
  }
}

function generateGuid(): string {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4(): string {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
