import { Injectable } from '@angular/core';

import { GuidGeneratorService } from '../../shared/services/guid-generator.service';
import { VocabListService } from './vocab-list.service';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuxiliaryVerb, Case, FixedPlurality, Gender, ReflexiveCase, Transitivity, WordType } from '../models/data';
import { VocabList } from '../models/vocab-list.interface';

@Injectable()
export class InMemoryVocabListService extends VocabListService {

  constructor(private guidGenerator: GuidGeneratorService) {
    super();
  }

  //TODO: User Separability throughout and re-name property.
  // Stryker disable all
  public readonly seedData: VocabList[] = [{
    id: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
    name: 'Kitchen',
    description: 'A collection of common kitchen items.',
    listItems: [
      {
        id: '473573a8-86d7-4b64-8e51-96fead598a7c',
        wordType: WordType.Verb,
        isWeakMasculineNoun: undefined,
        reflexiveCase: undefined,
        isSeparable: false,
        transitivity: Transitivity.Both,
        thirdPersonPresent: "isst",
        thirdPersonImperfect: "aß",
        auxiliaryVerb: AuxiliaryVerb.Haben,
        perfect: "gegessen",
        gender: undefined,
        german: 'essen',
        plural: undefined,
        preposition: undefined,
        prepositionCase: undefined,
        comparative: undefined,
        superlative: undefined,
        english: 'to reply, retort',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        fixedPlurality: undefined,
      },
      {
        id: 'aeedd2e9-daa3-4b12-aaf0-b96dad211441',
        wordType: WordType.Verb,
        isWeakMasculineNoun: undefined,
        reflexiveCase: ReflexiveCase.Accusative,
        isSeparable: false,
        transitivity: Transitivity.Transitive,
        thirdPersonPresent: undefined,
        thirdPersonImperfect: undefined,
        auxiliaryVerb: AuxiliaryVerb.Haben,
        perfect: undefined,
        gender: undefined,
        german: 'begnügen',
        plural: undefined,
        preposition: "mit",
        prepositionCase: Case.Dative,
        comparative: undefined,
        superlative: undefined,
        english: 'To content oneself with',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        fixedPlurality: undefined,
      },
      {
        id: 'c2f10b98-0c0c-4a12-a525-19e3dc64e899',
        wordType: WordType.Verb,
        isWeakMasculineNoun: undefined,
        reflexiveCase: undefined,
        isSeparable: true,
        transitivity: Transitivity.Intransitive,
        thirdPersonPresent: "kommt",
        thirdPersonImperfect: "kam",
        auxiliaryVerb: AuxiliaryVerb.Sein,
        perfect: "angekommen",
        gender: undefined,
        german: 'ankommen',
        plural: undefined,
        preposition: undefined,
        prepositionCase: undefined,
        comparative: undefined,
        superlative: undefined,
        english: 'to arrive',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        fixedPlurality: undefined,
      },
      {
        id: 'dba640e1-682f-4f24-a303-1ae74fa762e0',
        wordType: WordType.Verb,
        isWeakMasculineNoun: undefined,
        reflexiveCase: undefined,
        isSeparable: false,
        transitivity: Transitivity.Intransitive,
        thirdPersonPresent: "ist",
        thirdPersonImperfect: "war",
        auxiliaryVerb: AuxiliaryVerb.Sein,
        perfect: "gewesen",
        gender: undefined,
        german: 'sein',
        plural: undefined,
        preposition: undefined,
        prepositionCase: undefined,
        comparative: undefined,
        superlative: undefined,
        english: 'to be',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        fixedPlurality: undefined,
      },
      {
        id: 'e64d6146-93be-467b-a19e-8749a363b08b',
        wordType: WordType.Noun,
        isWeakMasculineNoun: false,
        reflexiveCase: undefined,
        isSeparable: undefined,
        transitivity: undefined,
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
        transitivity: undefined,
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
        transitivity: undefined,
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
        transitivity: undefined,
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
        transitivity: Transitivity.Both,
        thirdPersonPresent: undefined,
        thirdPersonImperfect: undefined,
        auxiliaryVerb: AuxiliaryVerb.Haben,
        perfect: undefined,
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
        id: 'e545f0d0-aa5c-4a35-8bbd-0a5222ef48f5',
        wordType: WordType.Verb,
        isWeakMasculineNoun: undefined,
        reflexiveCase: undefined,
        isSeparable: false,
        transitivity: Transitivity.Both,
        thirdPersonPresent: undefined,
        thirdPersonImperfect: undefined,
        auxiliaryVerb: AuxiliaryVerb.Haben,
        perfect: undefined,
        gender: undefined,
        german: 'entgegnen',
        plural: undefined,
        preposition: 'auf',
        prepositionCase: Case.Accusative,
        comparative: undefined,
        superlative: undefined,
        english: 'to reply, retort',
        vocabListId: '83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed',
        fixedPlurality: undefined,
      },
      {
        id: '0a94e979-d8ba-45b6-a277-25e9f60de608',
        wordType: WordType.Adjective,
        isWeakMasculineNoun: undefined,
        reflexiveCase: undefined,
        isSeparable: undefined,
        transitivity: undefined,
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
        transitivity: undefined,
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
  // Stryker restore all

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


