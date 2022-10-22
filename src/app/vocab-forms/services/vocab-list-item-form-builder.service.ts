import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemValidationProvider } from '.';

import { Null } from "../../../core/types";
import { ModelFormBuilder } from '../../shared/services/model-form-builder.class';
import { VocabListItem } from '../../vocab/models';
import { AuxiliaryVerb, Case, FixedPlurality, Gender, ReflexiveCase, Separability, Transitivity, WordType } from '../../vocab/models/data';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

@Injectable()
export class VocabListItemFormBuilder extends ModelFormBuilder {
  constructor(formBuilder: FormBuilder, private readonly validationProvider: ItemValidationProvider) {
    super(formBuilder);
  }

  public build(): FormGroup<VocabListItemForm> {
    const form: FormGroup<VocabListItemForm> = this.formBuilder.group<VocabListItemForm>({
      wordType: this.formBuilder.control<Null<WordType>>(null),
      isWeakMasculineNoun: this.formBuilder.control<Null<boolean>>(null),
      reflexiveCase: this.formBuilder.control<Null<ReflexiveCase>>(null),
      separability: this.formBuilder.control<Null<Separability>>(null),
      transitivity: this.formBuilder.control<Null<Transitivity>>(null),
      thirdPersonPresent: this.formBuilder.control<Null<string>>(null),
      thirdPersonImperfect: this.formBuilder.control<Null<string>>(null),
      auxiliaryVerb: this.formBuilder.control<Null<AuxiliaryVerb>>(null),
      perfect: this.formBuilder.control<Null<string>>(null),
      gender: this.formBuilder.control<Null<Gender>>(null),
      german: this.formBuilder.control<Null<string>>(null),
      plural: this.formBuilder.control<Null<string>>(null),
      preposition: this.formBuilder.control<Null<string>>(null),
      prepositionCase: this.formBuilder.control<Null<Case>>(null),
      comparative: this.formBuilder.control<Null<string>>(null),
      superlative: this.formBuilder.control<Null<string>>(null),
      english: this.formBuilder.control<Null<string>>(null),
      fixedPlurality: this.formBuilder.control<Null<FixedPlurality>>(null),
      isIrregular: this.formBuilder.control<Null<boolean>>(null),
    });
    this.validationProvider.addValidationTo(form);
    return form;
  }

  public buildFromFormGroup(vocabListItemForm: VocabListItemForm): FormGroup<VocabListItemForm> {
    const form: FormGroup<VocabListItemForm> = this.formBuilder.group<VocabListItemForm>({
      wordType: this.formBuilder.control<Null<WordType>>(vocabListItemForm.wordType),
      isWeakMasculineNoun: this.formBuilder.control<Null<boolean>>(vocabListItemForm.isWeakMasculineNoun),
      reflexiveCase: this.formBuilder.control<Null<ReflexiveCase>>(vocabListItemForm.reflexiveCase),
      separability: this.formBuilder.control<Null<Separability>>(vocabListItemForm.separability),
      transitivity: this.formBuilder.control<Null<Transitivity>>(vocabListItemForm.transitivity),
      thirdPersonPresent: this.formBuilder.control<Null<string>>(vocabListItemForm.thirdPersonPresent),
      thirdPersonImperfect: this.formBuilder.control<Null<string>>(vocabListItemForm.thirdPersonImperfect),
      auxiliaryVerb: this.formBuilder.control<Null<AuxiliaryVerb>>(vocabListItemForm.auxiliaryVerb),
      perfect: this.formBuilder.control<Null<string>>(vocabListItemForm.perfect),
      gender: this.formBuilder.control<Null<Gender>>(vocabListItemForm.gender),
      german: this.formBuilder.control<Null<string>>(vocabListItemForm.german),
      plural: this.formBuilder.control<Null<string>>(vocabListItemForm.plural),
      preposition: this.formBuilder.control<Null<string>>(vocabListItemForm.preposition),
      prepositionCase: this.formBuilder.control<Null<Case>>(vocabListItemForm.prepositionCase),
      comparative: this.formBuilder.control<Null<string>>(vocabListItemForm.comparative),
      superlative: this.formBuilder.control<Null<string>>(vocabListItemForm.superlative),
      english: this.formBuilder.control<Null<string>>(vocabListItemForm.english),
      fixedPlurality: this.formBuilder.control<Null<FixedPlurality>>(vocabListItemForm.fixedPlurality),
      isIrregular: this.formBuilder.control<Null<boolean>>(vocabListItemForm.isIrregular),
    });
    this.validationProvider.addValidationTo(form);
    return form;
  }

  public buildFromModel(listItem: VocabListItem): FormGroup<VocabListItemForm> {
    const form: FormGroup<VocabListItemForm> = this.build();
    form.patchValue(listItem);
    return form;
  }
}
