import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FixedPlurality } from '../../../vocab/models/data';
import { VocabListItemForm } from '../../models';
import { WordTypeValueController } from '../core';

@Injectable()
export class NounValueController extends WordTypeValueController {
  public override setInitialValues(form: FormGroup<VocabListItemForm>): void {
    form.controls.fixedPlurality.setValue(FixedPlurality.None);
    form.controls.isWeakMasculineNoun.setValue(false);
  }

  public override removeValues(form: FormGroup<VocabListItemForm>): void {
    form.controls.gender.reset();
    form.controls.preposition.reset();
    form.controls.prepositionCase.reset();
    form.controls.plural.reset();
    form.controls.fixedPlurality.reset();
    form.controls.isWeakMasculineNoun.reset();
  }
}
