import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AbstractValidationProvider } from '../../../core';

import { wordMaxLength, wordMinLength } from '../../vocab/models/data/constraints/item-data-constraints';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';
import { RequiredWithLengthRangeValidatorFactory } from '../validation';

@Injectable()
export class ItemValidationProvider extends AbstractValidationProvider {
  private readonly englishValidator: ValidatorFn;
  private readonly germanValidator: ValidatorFn;
  public constructor(private readonly validatorFactory: RequiredWithLengthRangeValidatorFactory) {
    super();
    this.englishValidator = this.validatorFactory.create(wordMinLength, wordMaxLength);
    this.germanValidator = this.validatorFactory.create(wordMinLength, wordMaxLength);
  }

  public addValidationTo(form: FormGroup<VocabListItemForm>): void {
    const controls: VocabListItemForm = form.controls;
    this.addValidator(Validators.required, controls.wordType)
    this.addValidator(this.englishValidator, controls.english)
    this.addValidator(this.germanValidator, controls.german)
  }
}
