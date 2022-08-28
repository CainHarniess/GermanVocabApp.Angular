import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { WordType } from '../../vocab/models/data';

import { NounFormManager, VerbFormManager, AdverbFormManager, AdjectiveFormManager, WordTypeFormManager } from '../form-management/index';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

@Injectable()
export class WordTypeFormManagerFactory {
  public create(wordType: WordType, form: FormGroup<VocabListItemForm>): WordTypeFormManager {
    switch (wordType) {
      case WordType.None: {
        throw new Error("Unable to create word type form manager from None word type.")
      } case WordType.Noun: {
        return new NounFormManager(form)
      } case WordType.Verb: {
        return new VerbFormManager(form)
      } case WordType.Adjective: {
        return new AdjectiveFormManager(form);
      } case WordType.Adverb: {
        return new AdverbFormManager(form);
      }
    }
  }
}

