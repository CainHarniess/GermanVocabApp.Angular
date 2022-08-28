import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModelFormBuilder } from '../../shared/services/model-form-builder.class';
import { Case, FixedPlurality, Gender, ReflexiveCase, WordType } from '../../vocab/models/data';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

@Injectable()
export class VocabListItemFormBuilder extends ModelFormBuilder {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  public build(): FormGroup<VocabListItemForm> {
    return this.formBuilder.group<VocabListItemForm>({
      wordType: this.formBuilder.control<WordType | null>(null, Validators.required),
      isWeakMasculineNoun: this.formBuilder.control<boolean | null>(null),
      reflexiveCase: this.formBuilder.control<ReflexiveCase | null>(null),
      isSeparable: this.formBuilder.control<boolean | null>(null),
      isTransitive: this.formBuilder.control<boolean | null>(null),
      thirdPersonPresent: this.formBuilder.control<string | null>(null),
      thirdPersonImperfect: this.formBuilder.control<string | null>(null),
      auxiliaryVerb: this.formBuilder.control(null),
      perfect: this.formBuilder.control<string | null>(null),
      gender: this.formBuilder.control<Gender | null>(null),
      german: this.formBuilder.control<string | null>(null, Validators.required),
      plural: this.formBuilder.control<string | null>(null),
      preposition: this.formBuilder.control<string | null>(null),
      prepositionCase: this.formBuilder.control<Case | null>(null),
      comparative: this.formBuilder.control<string | null>(null),
      superlative: this.formBuilder.control<string | null>(null),
      english: this.formBuilder.control<string | null>(null, Validators.required),
      fixedPlurality: this.formBuilder.control<FixedPlurality | null>(null),
      isIrregular: this.formBuilder.control<boolean | null>(null),
    });
  }
}
