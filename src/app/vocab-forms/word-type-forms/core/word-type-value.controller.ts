import { FormGroup } from '@angular/forms';
import { VocabListItemForm } from '../../models';

export abstract class WordTypeValueController {
  public abstract setInitialValues(form: FormGroup<VocabListItemForm>): void;
  public abstract removeValues(form: FormGroup<VocabListItemForm>): void;
}
