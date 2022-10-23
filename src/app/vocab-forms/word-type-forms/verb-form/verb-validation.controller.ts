import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { prepositionMaxLength, prepositionMinLength } from '../../../vocab/models/data/constraints/item-data-constraints';
import { VocabListItemForm } from '../../models';
import { StringLengthValidatorFactory } from '../../validation';
import { IrregularValidationController } from '../core';

@Injectable()
export class VerbValidationController extends IrregularValidationController {
  private readonly prepositionValidator: ValidatorFn;

  public constructor(lengthRangeValidatorFactory: StringLengthValidatorFactory) {
    super();
    this.prepositionValidator = lengthRangeValidatorFactory.create(prepositionMinLength, prepositionMaxLength);
  }

  protected addValidationProtected(controls: VocabListItemForm): void {
    this.addValidator(Validators.required, controls.auxiliaryVerb)
    this.addValidator(Validators.required, controls.separability)
    this.addValidator(Validators.required, controls.transitivity)
    this.addValidator(this.prepositionValidator, controls.preposition);
  }

  protected addIrregularFollowFieldValidation(form: VocabListItemForm): void {
    return;
  }

  protected removeValidationProtected(controls: VocabListItemForm): void {
    this.removeValidator(Validators.required, controls.auxiliaryVerb)
    this.removeValidator(Validators.required, controls.separability)
    this.removeValidator(Validators.required, controls.transitivity)
    this.removeValidator(this.prepositionValidator, controls.preposition);
  }

  protected removeIrregularFollowFieldValidation(controls: VocabListItemForm): void {
    this.removeValidator(Validators.required, controls.thirdPersonPresent)
    this.removeValidator(Validators.required, controls.thirdPersonImperfect)
    this.removeValidator(Validators.required, controls.perfect)
  }
}
