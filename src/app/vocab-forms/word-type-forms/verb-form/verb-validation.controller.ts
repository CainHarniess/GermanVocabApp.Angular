import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { ControlValidatorVisitor } from '../../../forms';
import { prepositionMaxLength, prepositionMinLength } from '../../../vocab/models/data/constraints/item-data-constraints';
import { VocabListItemForm } from '../../models';
import { StringLengthValidatorFactory } from '../../validation';
import { IrregularValidationController } from '../core';

@Injectable()
export class VerbValidationController extends IrregularValidationController {
  private readonly prepositionValidator: ValidatorFn;

  public constructor(validationVisitor: ControlValidatorVisitor, lengthRangeValidatorFactory: StringLengthValidatorFactory) {
    super(validationVisitor);
    this.prepositionValidator = lengthRangeValidatorFactory.create(prepositionMinLength, prepositionMaxLength);
  }

  protected addValidationProtected(controls: VocabListItemForm): void {
    this.validationVisitor.addValidator(Validators.required, controls.auxiliaryVerb)
    this.validationVisitor.addValidator(Validators.required, controls.separability)
    this.validationVisitor.addValidator(Validators.required, controls.transitivity)
    this.validationVisitor.addValidator(this.prepositionValidator, controls.preposition);
  }

  protected addIrregularFollowFieldValidation(form: VocabListItemForm): void {
    return;
  }

  protected removeValidationProtected(controls: VocabListItemForm): void {
    this.validationVisitor.removeValidator(Validators.required, controls.auxiliaryVerb)
    this.validationVisitor.removeValidator(Validators.required, controls.separability)
    this.validationVisitor.removeValidator(Validators.required, controls.transitivity)
    this.validationVisitor.removeValidator(this.prepositionValidator, controls.preposition);
  }

  protected removeIrregularFollowFieldValidation(controls: VocabListItemForm): void {
    this.validationVisitor.removeValidator(Validators.required, controls.thirdPersonPresent)
    this.validationVisitor.removeValidator(Validators.required, controls.thirdPersonImperfect)
    this.validationVisitor.removeValidator(Validators.required, controls.perfect)
  }
}
