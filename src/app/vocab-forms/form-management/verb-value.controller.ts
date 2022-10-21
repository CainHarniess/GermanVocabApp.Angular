import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IrregularValueController } from '.';
import { Separability } from '../../vocab/models/data';
import { VocabListItemForm } from '../models';

@Injectable()
export class VerbValueController extends IrregularValueController {
  protected setInitialdValuesProtected(form: FormGroup<VocabListItemForm>): void {
    form.controls.separability.setValue(Separability.None);
    form.controls.transitivity.setValue(null);
  }

  protected removeValuesProtected(form: FormGroup<VocabListItemForm>): void {
    form.controls.reflexiveCase.reset();
    form.controls.auxiliaryVerb.reset();
    form.controls.perfect.reset();
    form.controls.separability.reset();
    form.controls.transitivity.reset();
  }

  protected resetIrregularFollowFields(form: FormGroup<VocabListItemForm>): void {
    form.controls.thirdPersonPresent.reset();
    form.controls.thirdPersonImperfect.reset();
  }
}
