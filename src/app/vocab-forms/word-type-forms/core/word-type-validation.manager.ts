import { FormGroup } from '@angular/forms';
import { AbstractValidationProvider } from '../../../../core';
import { VocabListItemForm } from '../../models';

export abstract class WordTypeValidationController extends AbstractValidationProvider {
  public abstract addValidation(form: FormGroup<VocabListItemForm>): void;
  public abstract removeValidation(form: FormGroup<VocabListItemForm>): void;
}
