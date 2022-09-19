import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModelFormBuilder } from '../../shared/services/model-form-builder.class';
import { AuxiliaryVerb, Case, FixedPlurality, Gender, ReflexiveCase, Separability, Transitivity, WordType } from '../../vocab/models/data';
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
      wordType: this.formBuilder.control<Null<WordType>>(null, Validators.required),
      isWeakMasculineNoun: this.formBuilder.control<Null<boolean>>(null),
      reflexiveCase: this.formBuilder.control<Null<ReflexiveCase>>(null),
      separability: this.formBuilder.control<Null<Separability>>(null),
      transitivity: this.formBuilder.control<Null<Transitivity>>(null),
      thirdPersonPresent: this.formBuilder.control<Null<string>>(null),
      thirdPersonImperfect: this.formBuilder.control<Null<string>>(null),
      auxiliaryVerb: this.formBuilder.control<Null<AuxiliaryVerb>>(null),
      perfect: this.formBuilder.control<Null<string>>(null),
      gender: this.formBuilder.control<Null<Gender>>(null),
      german: this.formBuilder.control<Null<string>>(null, Validators.required),
      plural: this.formBuilder.control<Null<string>>(null),
      preposition: this.formBuilder.control<Null<string>>(null),
      prepositionCase: this.formBuilder.control<Null<Case>>(null),
      comparative: this.formBuilder.control<Null<string>>(null),
      superlative: this.formBuilder.control<Null<string>>(null),
      english: this.formBuilder.control<Null<string>>(null, Validators.required),
      fixedPlurality: this.formBuilder.control<Null<FixedPlurality>>(null),
      isIrregular: this.formBuilder.control<Null<boolean>>(null),
    });
  }

  public buildFromFormGroup(vocabListItemForm: VocabListItemForm): FormGroup<VocabListItemForm> {
    return this.formBuilder.group<VocabListItemForm>({
      wordType: this.formBuilder.control<Null<WordType>>(vocabListItemForm.wordType, Validators.required),
      isWeakMasculineNoun: this.formBuilder.control<Null<boolean>>(vocabListItemForm.isWeakMasculineNoun),
      reflexiveCase: this.formBuilder.control<Null<ReflexiveCase>>(vocabListItemForm.reflexiveCase),
      separability: this.formBuilder.control<Null<Separability>>(vocabListItemForm.separability),
      transitivity: this.formBuilder.control<Null<Transitivity>>(vocabListItemForm.transitivity),
      thirdPersonPresent: this.formBuilder.control<Null<string>>(vocabListItemForm.thirdPersonPresent),
      thirdPersonImperfect: this.formBuilder.control<Null<string>>(vocabListItemForm.thirdPersonImperfect),
      auxiliaryVerb: this.formBuilder.control<Null<AuxiliaryVerb>>(vocabListItemForm.auxiliaryVerb),
      perfect: this.formBuilder.control<Null<string>>(vocabListItemForm.perfect),
      gender: this.formBuilder.control<Null<Gender>>(vocabListItemForm.gender),
      german: this.formBuilder.control<Null<string>>(vocabListItemForm.german, Validators.required),
      plural: this.formBuilder.control<Null<string>>(vocabListItemForm.plural),
      preposition: this.formBuilder.control<Null<string>>(vocabListItemForm.preposition),
      prepositionCase: this.formBuilder.control<Null<Case>>(vocabListItemForm.prepositionCase),
      comparative: this.formBuilder.control<Null<string>>(vocabListItemForm.comparative),
      superlative: this.formBuilder.control<Null<string>>(vocabListItemForm.superlative),
      english: this.formBuilder.control<Null<string>>(vocabListItemForm.english, Validators.required),
      fixedPlurality: this.formBuilder.control<Null<FixedPlurality>>(vocabListItemForm.fixedPlurality),
      isIrregular: this.formBuilder.control<Null<boolean>>(vocabListItemForm.isIrregular),
    });
  }

  public buildFromModel(listItem: VocabListItem): FormGroup<VocabListItemForm> {
    const form: FormGroup<VocabListItemForm> = this.build();
    form.patchValue(listItem);
    return form;
  }
}
