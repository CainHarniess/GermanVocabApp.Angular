import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";

import { VocabList } from "../models/vocab-list.interface";

import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators';
import { NounGender } from "../models/data/noun-gender.enum";

@Injectable({
  providedIn: "root"
})
export class InMemoryVocabListDataService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo | undefined): Observable<{ "vocab-lists": VocabList[], }> {
    const vocabLists: VocabList[] = [{
      id: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
      name: 'Kitchen',
      description: 'A collection of common kitchen items.',
      listItems: [
        {
          gender: NounGender.Masculine,
          german: 'Wasserkocher',
          english: 'Kettle',
          vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        },
        {
          gender: NounGender.Masculine,
          german: 'Schrank',
          english: 'Cupboard',
          vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        },
        {
          gender: NounGender.Feminine,
          german: 'Spülbecken',
          english: 'Sink',
          vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        },
        {
          gender: NounGender.Feminine,
          german: 'Pfanne',
          english: 'Pan',
          vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        },
        {
          gender: NounGender.Masculine,
          german: 'Ofen',
          english: 'Oven',
          vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        },
        {
          gender: NounGender.Masculine,
          german: 'Kühlschrank',
          english: 'Fridge',
          vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        },
        {
          gender: NounGender.Masculine,
          german: 'Herd',
          english: 'Stove',
          vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        },
        {
          gender: NounGender.Neuter,
          german: 'Hackbrett',
          english: 'Chopping board',
          vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        },
        {
          gender: NounGender.Masculine,
          german: 'Ablauf',
          english: 'Draining board',
          vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        },
        {
          gender: NounGender.Masculine,
          german: 'Mulleimer',
          english: 'Bin',
          vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        },],
      authorName: 'Cain Harniess',
    },
      {
        id: 'd1e797cc-651a-ee06-c320-8f10d36712d6',
        name: 'Der Prozess',
        description: 'Words picked up from reading Der Process by Franz Kafka.',
        listItems: [
          {
            gender: NounGender.Masculine,
            german: 'Bote',
            english: 'Messenger',
            vocabListId: 'd1e797cc-651a-ee06-c320-8f10d36712d6',
          },
          {
            gender: NounGender.Feminine,
            german: 'Eingabe',
            english: 'Plea',
            vocabListId: 'd1e797cc-651a-ee06-c320-8f10d36712d6',
          },
          {
            gender: NounGender.Feminine,
            german: 'Überwältigung',
            english: 'Overcoming (of sth.)',
            vocabListId: 'd1e797cc-651a-ee06-c320-8f10d36712d6',
          },
          {
            gender: NounGender.Feminine,
            german: 'Abfassung',
            english: 'writing (of sth.)',
            vocabListId: 'd1e797cc-651a-ee06-c320-8f10d36712d6',
          },
          {
            gender: NounGender.Feminine,
            german: 'Ermattung',
            english: 'exhaustion',
            vocabListId: 'd1e797cc-651a-ee06-c320-8f10d36712d6',
          },
          {
            gender: NounGender.Feminine,
            german: 'Berücksichtigung',
            english: 'consideration',
            vocabListId: 'd1e797cc-651a-ee06-c320-8f10d36712d6',
          },
          {
            gender: NounGender.Feminine,
            german: 'Entgegnung',
            english: 'Reply, retort',
            vocabListId: 'd1e797cc-651a-ee06-c320-8f10d36712d6',
          },
        ],
        authorName: 'Ilka Barenscheer',
      },
    {
      id: 'f3401b64-8427-ee2c-c4a2-cfbf092a8aa9',
      name: 'Idioms',
      description: 'Phrases that should not be translated literally',
      listItems: [],
      authorName: 'Chris Allen',
    },
    ];
    const db: { "vocab-lists": VocabList[], } = { "vocab-lists": vocabLists, };

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
