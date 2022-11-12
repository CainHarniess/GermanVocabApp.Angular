import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { RequiredStringLengthValidatorFactory } from '../../../core/validation';
import { ControlValidatorVisitor } from '../../forms';

import { wordMaxLength, wordMinLength } from '../../vocab/models/data/constraints/item-data-constraints';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

@Injectable()
export class ItemValidationProvider {
  private readonly englishValidator: ValidatorFn;
  private readonly germanValidator: ValidatorFn;

  public constructor(private readonly validationVisitor: ControlValidatorVisitor,
    private readonly validatorFactory: RequiredStringLengthValidatorFactory) {
    this.englishValidator = this.validatorFactory.create(wordMinLength, wordMaxLength);
    this.germanValidator = this.validatorFactory.create(wordMinLength, wordMaxLength);
  }

  public addValidationTo(form: FormGroup<VocabListItemForm>): void {
    const controls: VocabListItemForm = form.controls;
    this.validationVisitor.addValidator(Validators.required, controls.wordType)
    this.validationVisitor.addValidator(this.englishValidator, controls.english)
    this.validationVisitor.addValidator(this.germanValidator, controls.german)
  }
}
