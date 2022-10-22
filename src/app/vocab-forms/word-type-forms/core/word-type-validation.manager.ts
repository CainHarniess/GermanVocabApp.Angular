import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VocabListItemForm } from '../../models';

@Injectable()
export abstract class WordTypeValidationController {
  public abstract addValidation(form: FormGroup<VocabListItemForm>): void;
  public abstract removeValidation(form: FormGroup<VocabListItemForm>): void;
}
