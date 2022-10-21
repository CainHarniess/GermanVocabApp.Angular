import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IrregularValueController } from '.';
import { VocabListItemForm } from '../models';

@Injectable()
export class ModifierValueController extends IrregularValueController {
  protected setInitialdValuesProtected(form: FormGroup<VocabListItemForm>): void {

  }

  protected removeValuesProtected(form: FormGroup<VocabListItemForm>): void {
    
  }

  protected override resetIrregularFollowFields(form: FormGroup<VocabListItemForm>): void {
    const comparativeControl: FormControl<string | null> = form.controls.comparative;
    comparativeControl.setValue(null);

    const superlativeControl: FormControl<string | null> = form.controls.superlative;
    superlativeControl.setValue(null);
  }
}
