import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VocabListItemForm } from '../../models';
import { IrregularValidationManager } from './irregular-validation.manager';

@Injectable()
export class ModifierValidationManager extends IrregularValidationManager {
  protected addValidationProtected(form: FormGroup<VocabListItemForm>): void {

  }

  protected addIrregularFollowFieldValidation(form: FormGroup<VocabListItemForm>): void {

  }

  protected removeValidationProtected(form: FormGroup<VocabListItemForm>): void {

  }

  protected removeIrregularFollowFieldValidation(form: FormGroup<VocabListItemForm>): void {
    const comparativeControl: FormControl<string | null> = form.controls.comparative;
    comparativeControl.removeValidators([Validators.required]);
    comparativeControl.updateValueAndValidity();

    const superlativeControl: FormControl<string | null> = form.controls.superlative;
    superlativeControl.removeValidators([Validators.required]);
    superlativeControl.updateValueAndValidity();
  }

}
