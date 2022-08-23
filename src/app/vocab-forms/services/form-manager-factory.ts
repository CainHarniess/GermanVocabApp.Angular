import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { WordType } from '../../vocab/models/data/word-type.enum';

import { NounFormManager, VerbFormManager, AdverbFormManager, AdjectiveFormManager, WordTypeFormManager } from '../form-management/index';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

@Injectable()
export class WordTypeFormManagerFactory {
  public create(wordType: WordType, form: FormGroup<VocabListItemForm>): WordTypeFormManager {
    switch (wordType) {
      case WordType.None: {
        throw new Error("Unable to create word type form manager from None word type.")
        break;
      } case WordType.Noun: {
        return new NounFormManager(form)
        break;
      } case WordType.Verb: {
        return new VerbFormManager(form)
        break;
      } case WordType.Adjective: {
        return new AdjectiveFormManager(form);
        break;
      } case WordType.Adverb: {
        return new AdverbFormManager(form);
        break;
      }
    }
  }
}

