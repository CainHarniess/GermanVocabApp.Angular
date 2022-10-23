import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { descriptionMaxLength, descriptionMinLength, nameMaxLength, nameMinLength } from '../../vocab/models/data/constraints/vocab-list-data-constraints';
import { VocabListForm } from '../models';
import { RequiredStringLengthValidatorFactory } from '../validation';

@Injectable()
export class VocabListFormValidationProvider {
  public constructor(private readonly validatorFactory: RequiredStringLengthValidatorFactory) {

  }

  public provide(form: FormGroup<VocabListForm>): FormGroup<VocabListForm> {
    const controls: VocabListForm = form.controls;
    controls.name.addValidators(this.validatorFactory.create(nameMinLength, nameMaxLength));
    controls.description.addValidators(this.validatorFactory.create(descriptionMinLength, descriptionMaxLength));
    return form;
  }
}
