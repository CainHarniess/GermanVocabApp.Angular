import { Injectable } from '@angular/core';

import { AuxiliaryVerb } from '../models/data/auxiliary-verb.enum';
import { Gender } from '../models/data/gender.enum';
import { WordType } from '../models/data/word-type.enum';
import { VocabList } from '../models/vocab-list.interface';
import { VocabListService } from './vocab-list.service';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GuidGeneratorService } from '../../shared/services/guid-generator.service';

@Injectable()
export class InMemoryVocabListService extends VocabListService {

  constructor(private guidGenerator: GuidGeneratorService) {
    super();
  }

  private seedData: VocabList[] = [{
    id: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
    name: 'Kitchen',
    description: 'A collection of common kitchen items.',
    listItems: [
      {
        wordType: WordType.Noun,
        isWeakMasculineNoun: false,
        reflexiveCase: undefined,
        isSeparable: undefined,
        isTransitive: undefined,
        thirdPersonPresent: undefined,
        thirdPersonImperfect: undefined,
        auxiliaryVerb: undefined,
        perfect: undefined,
        gender: Gender.Masculine,
        german: 'Wasserkocher',
        plural: 'Wasserköcher',
        preposition: undefined,
        prepositionCase: undefined,
        comparative: undefined,
        superlative: undefined,
        english: 'kettle',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
      },
      {
        wordType: WordType.Verb,
        isWeakMasculineNoun: undefined,
        reflexiveCase: undefined,
        isSeparable: false,
        isTransitive: false,
        thirdPersonPresent: undefined,
        thirdPersonImperfect: undefined,
        auxiliaryVerb: AuxiliaryVerb.Haben,
        perfect: '',
        gender: undefined,
        german: 'kochen',
        plural: undefined,
        preposition: undefined,
        prepositionCase: undefined,
        comparative: undefined,
        superlative: undefined,
        english: 'to cook',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
      },
      {
        wordType: WordType.Adjective,
        isWeakMasculineNoun: undefined,
        reflexiveCase: undefined,
        isSeparable: undefined,
        isTransitive: undefined,
        thirdPersonPresent: undefined,
        thirdPersonImperfect: undefined,
        auxiliaryVerb: undefined,
        perfect: undefined,
        gender: undefined,
        german: 'gut',
        plural: undefined,
        preposition: undefined,
        prepositionCase: undefined,
        comparative: 'besser',
        superlative: 'beste',
        english: 'good',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
      },
      {
        wordType: WordType.Adverb,
        isWeakMasculineNoun: undefined,
        reflexiveCase: undefined,
        isSeparable: undefined,
        isTransitive: undefined,
        thirdPersonPresent: undefined,
        thirdPersonImperfect: undefined,
        auxiliaryVerb: undefined,
        perfect: undefined,
        gender: undefined,
        german: 'schnell',
        plural: undefined,
        preposition: undefined,
        prepositionCase: undefined,
        comparative: 'schneller',
        superlative: 'schnellste',
        english: 'quickly',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
      }
    ],
    authorName: "Cain Harniess",
  }];

  public override get(): Observable<VocabList[]> {
    return of(this.seedData)
      .pipe(
        delay(500),
      );
  }

  public override getWithId(vocabListId: string): Observable<VocabList> {
    const index: number = this.seedData.findIndex(vl => vl.id === vocabListId);

    if (index === -1) {
      throw new Error(`Vocab with ID ${vocabListId} not found in in-memory array.`);
    }

    return of(this.seedData[index])
      .pipe(
        delay(500),
      );
  }

  public override add(vocabList: VocabList): Observable<string> {
    vocabList.id = this.guidGenerator.generate();

    vocabList.listItems.forEach(li => {
      li.id = this.guidGenerator.generate();
      li.vocabListId = vocabList.id;
    });

    this.seedData.push(vocabList);
    return of(vocabList.id);
  }
}


