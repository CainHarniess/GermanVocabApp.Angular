import { FormGroup } from '@angular/forms';
import { AbstractValidationProvider } from '../../../../core';
import { VocabListItemForm } from '../../models';
import { RequiredWithLengthRangeValidatorFactory } from '../../validation';

export abstract class WordTypeValidationController extends AbstractValidationProvider {
  constructor(protected readonly requiredWithLengthValidatorFactory: RequiredWithLengthRangeValidatorFactory) {
    super();
  }

  public abstract addValidation(form: FormGroup<VocabListItemForm>): void;
  public abstract removeValidation(form: FormGroup<VocabListItemForm>): void;
}
