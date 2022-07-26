import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { ControlValidatorVisitor } from '../../../forms';
import { IrregularValidationController } from '.';
import { VocabListItemForm } from '../../models';

@Injectable()
export class ModifierValidationController extends IrregularValidationController {
  public constructor(validationVisitor: ControlValidatorVisitor) {
    super(validationVisitor);
  }

  protected addValidationProtected(controls: VocabListItemForm): void {

  }

  protected addIrregularFollowFieldValidation(controls: VocabListItemForm): void {

  }

  protected removeValidationProtected(controls: VocabListItemForm): void {

  }

  protected removeIrregularFollowFieldValidation(controls: VocabListItemForm): void {
    this.validationVisitor.removeValidator(Validators.required, controls.comparative);
    this.validationVisitor.removeValidator(Validators.required, controls.superlative);
  }
}
