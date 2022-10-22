import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Null } from '../../../../core/types';
import { AuxiliaryVerb, Separability, Transitivity } from '../../../vocab/models/data';
import { VocabListItemForm } from '../../models';
import { IrregularValidationManager } from '../core';

@Injectable()
export class VerbValidationManager extends IrregularValidationManager {
  protected addValidationProtected(form: FormGroup<VocabListItemForm>): void {
    const auxiliaryVerbControl: FormControl<AuxiliaryVerb | null> = form.controls.auxiliaryVerb!;
    auxiliaryVerbControl.addValidators([Validators.required]);
    auxiliaryVerbControl.updateValueAndValidity();

    const SeparabilityControl: FormControl<Null<Separability>> = form.controls.separability;
    SeparabilityControl.addValidators([Validators.required]);
    SeparabilityControl.updateValueAndValidity();

    const isTransitiveControl: FormControl<Null<Transitivity>> = form.controls.transitivity;
    isTransitiveControl.addValidators([Validators.required]);
    isTransitiveControl.updateValueAndValidity();
  }

  protected addIrregularFollowFieldValidation(form: FormGroup<VocabListItemForm>): void {
    return;
  }

  protected removeValidationProtected(form: FormGroup<VocabListItemForm>): void {
    const auxiliaryVerbControl: FormControl<AuxiliaryVerb | null> = form.controls.auxiliaryVerb!;
    auxiliaryVerbControl.removeValidators([Validators.required]);
    auxiliaryVerbControl.updateValueAndValidity();

    const separabilityControl: FormControl<Null<Separability>> = form.controls.separability;
    separabilityControl.removeValidators([Validators.required]);
    separabilityControl.updateValueAndValidity();

    const isTransitiveControl: FormControl<Null<Transitivity>> = form.controls.transitivity;
    isTransitiveControl.removeValidators([Validators.required]);
    isTransitiveControl.updateValueAndValidity();
  }

  protected override removeIrregularFollowFieldValidation(form: FormGroup<VocabListItemForm>): void {
    const thirdPersonPresentControl: FormControl<Null<string>> = form.controls.thirdPersonPresent;
    thirdPersonPresentControl.removeValidators([Validators.required]);
    thirdPersonPresentControl.updateValueAndValidity();

    const thirdPersonImperfectControl: FormControl<Null<string>> = form.controls.thirdPersonImperfect;
    thirdPersonImperfectControl.removeValidators([Validators.required]);
    thirdPersonImperfectControl.updateValueAndValidity();

    const perfectControl: FormControl<Null<string>> = form.controls.perfect;
    perfectControl.removeValidators([Validators.required]);
    perfectControl.updateValueAndValidity();
  }
}
