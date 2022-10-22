import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VocabListItemForm } from '../../models';

@Injectable()
export abstract class WordTypeValidationManager {
  public abstract addValidation(form: FormGroup<VocabListItemForm>): void;
  public abstract removeValidation(form: FormGroup<VocabListItemForm>): void;
}
