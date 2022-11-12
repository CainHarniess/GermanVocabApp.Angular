import { FormGroup } from '@angular/forms';
import { ControlValidatorVisitor } from '../../../forms';
import { VocabListItemForm } from '../../models';

//TODO: Rename file.
export abstract class WordTypeValidationController {
  protected constructor(protected readonly validationVisitor: ControlValidatorVisitor) {

  }

  public abstract addValidation(form: FormGroup<VocabListItemForm>): void;
  public abstract removeValidation(form: FormGroup<VocabListItemForm>): void;
}
