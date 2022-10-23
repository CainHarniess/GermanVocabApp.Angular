import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { prepositionMaxLength, prepositionMinLength, wordMaxLength, wordMinLength } from '../../../vocab/models/data/constraints/item-data-constraints';
import { VocabListItemForm } from '../../models';
import { LengthRangeValidatorFactory } from '../../validation';
import { WordTypeValidationController } from '../core';

@Injectable()
export class NounValidationController extends WordTypeValidationController {
  private readonly prepositionValidator: ValidatorFn;
  private readonly pluralValidator: ValidatorFn;

  public constructor(lengthRangeValidatorFactory: LengthRangeValidatorFactory) {
    super();
    this.prepositionValidator = lengthRangeValidatorFactory.create(prepositionMinLength, prepositionMaxLength);
    this.pluralValidator = lengthRangeValidatorFactory.create(wordMinLength, wordMaxLength);
  }

  public override addValidation(form: FormGroup<VocabListItemForm>): void {
    const controls: VocabListItemForm = form.controls;

    this.addValidator(Validators.required, controls.gender);
    this.addValidator(Validators.required, controls.fixedPlurality);
    this.addValidator(Validators.required, controls.isWeakMasculineNoun);
    this.addValidator(this.prepositionValidator, controls.preposition);
    this.addValidator(this.pluralValidator, controls.plural);
  }

  public override removeValidation(form: FormGroup<VocabListItemForm>): void {
    const controls: VocabListItemForm = form.controls;

    this.removeValidator(Validators.required, controls.gender);
    this.removeValidator(Validators.required, controls.fixedPlurality);
    this.removeValidator(Validators.required, controls.isWeakMasculineNoun);
    this.removeValidator(this.prepositionValidator, controls.preposition);
    this.removeValidator(this.pluralValidator, controls.plural);
  }
}
