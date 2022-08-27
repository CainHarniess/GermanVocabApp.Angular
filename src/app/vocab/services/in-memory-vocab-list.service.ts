import { Injectable } from '@angular/core';

import { AuxiliaryVerb } from '../models/data/auxiliary-verb.enum';
import { Gender } from '../models/data/gender.enum';
import { WordType } from '../models/data/word-type.enum';
import { VocabList } from '../models/vocab-list.interface';
import { FixedPlurality } from '../models/data/fixed-plurality.enum';

import { GuidGeneratorService } from '../../shared/services/guid-generator.service';
import { VocabListService } from './vocab-list.service';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Case } from '../models/data/case.enum';

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
        id: 'e64d6146-93be-467b-a19e-8749a363b08b',
        wordType: WordType.Noun,
        isWeakMasculineNoun: false,
        reflexiveCase: undefined,
        isSeparable: undefined,
        isTransitive: undefined,
        thirdPersonPresent: undefined,
        thirdPersonImperfect: undefined,
        auxiliaryVerb: undefined,
        perfect: undefined,
        gender: Gender.Feminine,
        german: 'Eifersucht',
        plural: undefined,
        preposition: "auf",
        prepositionCase: Case.Accusative,
        comparative: undefined,
        superlative: undefined,
        english: 'jealousy',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        fixedPlurality : FixedPlurality.None,
      },
      {
        id: '1321a874-30d1-4be4-83bb-2c4e0f6c79da',
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
        german: 'Verrat',
        plural: undefined,
        preposition: "an",
        prepositionCase: Case.Dative,
        comparative: undefined,
        superlative: undefined,
        english: 'betrayal',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        fixedPlurality: FixedPlurality.Singular,
      },
      {
        id: 'c020a16d-d135-4463-8b22-a7999cdd74a4',
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
        fixedPlurality: FixedPlurality.None,
      },
      {
        id: '72cbb03f-b37a-4a41-ad93-0abd4dde28b7',
        wordType: WordType.Noun,
        isWeakMasculineNoun: true,
        reflexiveCase: undefined,
        isSeparable: undefined,
        isTransitive: undefined,
        thirdPersonPresent: undefined,
        thirdPersonImperfect: undefined,
        auxiliaryVerb: undefined,
        perfect: undefined,
        gender: Gender.Masculine,
        german: 'Löwe',
        plural: 'Löwen',
        preposition: undefined,
        prepositionCase: undefined,
        comparative: undefined,
        superlative: undefined,
        english: 'lion',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        fixedPlurality: FixedPlurality.None,
      },
      {
        id: 'e325e079-79c2-4478-9cc8-29ef80094e90',
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
        fixedPlurality : undefined,
      },
      {
        id: '0a94e979-d8ba-45b6-a277-25e9f60de608',
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
        fixedPlurality : undefined,
      },
      {
        id: '97b053a7-35c2-4504-a649-846c1094ff12',
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
        fixedPlurality : undefined,
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


