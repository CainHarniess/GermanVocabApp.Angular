import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModelFormBuilder } from '../../shared/services/model-form-builder.class';
import { Case, FixedPlurality, Gender, ReflexiveCase, Separability, WordType } from '../../vocab/models/data';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';
import { Null } from "../../../core/types";
import { VocabListItem } from '../../vocab/models';

@Injectable()
export class VocabListItemFormBuilder extends ModelFormBuilder {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  public build(): FormGroup<VocabListItemForm> {
    return this.formBuilder.group<VocabListItemForm>({
      wordType: this.formBuilder.control<WordType | null>(null, Validators.required),
      isWeakMasculineNoun: this.formBuilder.control<Null<boolean>>(null),
      reflexiveCase: this.formBuilder.control<Null<ReflexiveCase>>(null),
      separability: this.formBuilder.control<Null<Separability>>(null),
      isTransitive: this.formBuilder.control<Null<boolean>>(null),
      thirdPersonPresent: this.formBuilder.control<Null<string>>(null),
      thirdPersonImperfect: this.formBuilder.control<Null<string>>(null),
      auxiliaryVerb: this.formBuilder.control(null),
      perfect: this.formBuilder.control<Null<string>>(null),
      gender: this.formBuilder.control<Gender | null>(null),
      german: this.formBuilder.control<Null<string>>(null, Validators.required),
      plural: this.formBuilder.control<Null<string>>(null),
      preposition: this.formBuilder.control<Null<string>>(null),
      prepositionCase: this.formBuilder.control<Null<Case>>(null),
      comparative: this.formBuilder.control<Null<string>>(null),
      superlative: this.formBuilder.control<Null<string>>(null),
      english: this.formBuilder.control<Null<string>>(null, Validators.required),
      fixedPlurality: this.formBuilder.control<FixedPlurality | null>(null),
      isIrregular: this.formBuilder.control<Null<boolean>>(null),
    });
  }

  public buildFromModel(vocabList: VocabListItem): FormGroup<VocabListItemForm> {
    const form: FormGroup<VocabListItemForm> = this.build();
    form.patchValue(vocabList);
    return form;
  }
}
