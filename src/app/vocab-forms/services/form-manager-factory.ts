import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { WordType } from '../../vocab/models/data';

import { AdjectiveFormManager, NounFormManager, VerbFormManager, WordTypeFormManager } from '../form-management/index';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

@Injectable()
export class WordTypeFormManagerFactory {
  private readonly formManagers: { [wordType in WordType]: WordTypeFormManager };

  public constructor(nounFormManager: NounFormManager, verbFormManager: VerbFormManager,
    adjectiveFormManager: AdjectiveFormManager, adverbFormManager: AdjectiveFormManager) {
    this.formManagers = {
      [WordType.Noun]: nounFormManager,
      [WordType.Verb]: verbFormManager,
      [WordType.Adjective]: adjectiveFormManager,
      [WordType.Adverb]: adverbFormManager,
      [WordType.None]: nounFormManager,
    };
  }

  public create(wordType: WordType, form: FormGroup<VocabListItemForm>): WordTypeFormManager {
    if (wordType === WordType.None) {
      throw new Error("Unable to create word type form manager from None word type.")
    }
    return this.formManagers[wordType];
  }
}

