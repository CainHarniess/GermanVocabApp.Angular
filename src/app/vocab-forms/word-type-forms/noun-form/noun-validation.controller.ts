import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ControlValidatorVisitor } from '../../../forms';
import { prepositionMaxLength, prepositionMinLength, wordMaxLength, wordMinLength } from '../../../vocab/models/data/constraints/item-data-constraints';
import { VocabListItemForm } from '../../models';
import { StringLengthValidatorFactory } from '../../validation';
import { WordTypeValidationController } from '../core';

@Injectable()
export class NounValidationController extends WordTypeValidationController {
  private readonly prepositionValidator: ValidatorFn;
  private readonly pluralValidator: ValidatorFn;

  public constructor(validationVisitor: ControlValidatorVisitor,
    lengthRangeValidatorFactory: StringLengthValidatorFactory) {
    super(validationVisitor);
    this.prepositionValidator = lengthRangeValidatorFactory.create(prepositionMinLength, prepositionMaxLength);
    this.pluralValidator = lengthRangeValidatorFactory.create(wordMinLength, wordMaxLength);
  }

  public override addValidation(form: FormGroup<VocabListItemForm>): void {
    const controls: VocabListItemForm = form.controls;

    this.validationVisitor.addValidator(Validators.required, controls.gender);
    this.validationVisitor.addValidator(Validators.required, controls.fixedPlurality);
    this.validationVisitor.addValidator(Validators.required, controls.isWeakMasculineNoun);
    this.validationVisitor.addValidator(this.prepositionValidator, controls.preposition);
    this.validationVisitor.addValidator(this.pluralValidator, controls.plural);
  }

  public override removeValidation(form: FormGroup<VocabListItemForm>): void {
    const controls: VocabListItemForm = form.controls;

    this.validationVisitor.removeValidator(Validators.required, controls.gender);
    this.validationVisitor.removeValidator(Validators.required, controls.fixedPlurality);
    this.validationVisitor.removeValidator(Validators.required, controls.isWeakMasculineNoun);
    this.validationVisitor.removeValidator(this.prepositionValidator, controls.preposition);
    this.validationVisitor.removeValidator(this.pluralValidator, controls.plural);
  }
}
