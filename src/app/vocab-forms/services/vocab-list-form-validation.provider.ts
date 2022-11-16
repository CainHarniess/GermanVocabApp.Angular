import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RequiredStringLengthValidatorFactory, StringLengthValidatorFactory } from '../../../core/validation';

import { descriptionMaxLength, descriptionMinLength, nameMaxLength, nameMinLength } from '../../vocab/models/data/constraints/vocab-list-data-constraints';
import { VocabListForm } from '../models';

@Injectable()
export class VocabListFormValidationProvider {
  public constructor(private readonly requiredFactory: RequiredStringLengthValidatorFactory,
    private readonly optionalFactory: StringLengthValidatorFactory) {

  }

  public provide(form: FormGroup<VocabListForm>): FormGroup<VocabListForm> {
    const controls: VocabListForm = form.controls;
    controls.name.addValidators(this.requiredFactory.create(nameMinLength, nameMaxLength));
    controls.description.addValidators(this.optionalFactory.create(descriptionMinLength, descriptionMaxLength));
    return form;
  }
}
