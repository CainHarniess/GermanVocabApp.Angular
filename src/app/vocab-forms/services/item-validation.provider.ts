import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WordType } from '../../vocab/models/data';

import { englishMaxLength, englishMinLength, germanMaxLength, germanMinLength } from '../../vocab/models/data/constraints/item-data-constraints';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';
import { RequiredWithLengthRangeValidatorFactory } from '../validation';

@Injectable()
export class ItemValidationProvider {
  public constructor(private readonly validatorFactory: RequiredWithLengthRangeValidatorFactory) {

  }

  public addValidationTo(form: FormGroup<VocabListItemForm>): void {
    const wordTypeControl: FormControl<WordType | null> = form.controls.wordType;
    wordTypeControl.addValidators(Validators.required);
    wordTypeControl.updateValueAndValidity();

    const englishControl: FormControl<string | null> = form.controls.english;
    englishControl.addValidators([this.validatorFactory.create(englishMinLength, englishMaxLength)]);
    englishControl.updateValueAndValidity();

    const germanControl: FormControl<string | null> = form.controls.german;
    germanControl.addValidators([this.validatorFactory.create(germanMinLength, germanMaxLength)]);
    germanControl.updateValueAndValidity();
  }
}
