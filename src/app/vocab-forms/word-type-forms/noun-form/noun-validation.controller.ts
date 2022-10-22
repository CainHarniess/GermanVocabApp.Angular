import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FixedPlurality, Gender } from '../../../vocab/models/data';
import { VocabListItemForm } from '../../models';
import { WordTypeValidationController } from '../core';

@Injectable()
export class NounValidationController extends WordTypeValidationController{
  public override addValidation(form: FormGroup<VocabListItemForm>): void {
    const genderControl: FormControl<Gender | null> = form.controls.gender;
    genderControl.addValidators([Validators.required]);
    genderControl.updateValueAndValidity();

    const fixedPluralityControl: FormControl<FixedPlurality | null> = form.controls.fixedPlurality;
    fixedPluralityControl.addValidators([Validators.required]);
    fixedPluralityControl.updateValueAndValidity();

    const isWeakMasculineNounControl: FormControl<boolean | null> = form.controls.isWeakMasculineNoun;
    isWeakMasculineNounControl.addValidators([Validators.required]);
    isWeakMasculineNounControl.updateValueAndValidity();
  }

  public override removeValidation(form: FormGroup<VocabListItemForm>): void {
    const genderControl: FormControl<Gender | null> = form.controls.gender;
    genderControl.removeValidators([Validators.required]);
    genderControl.updateValueAndValidity();

    const fixedPluralityControl: FormControl<FixedPlurality | null> = form.controls.fixedPlurality;
    fixedPluralityControl.removeValidators([Validators.required]);
    fixedPluralityControl.updateValueAndValidity();

    const isWeakMasculineNounControl: FormControl<boolean | null> = form.controls.isWeakMasculineNoun;
    isWeakMasculineNounControl.removeValidators([Validators.required]);
    isWeakMasculineNounControl.updateValueAndValidity();
  }
}