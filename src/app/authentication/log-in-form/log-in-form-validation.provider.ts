import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormValidationProvider } from '../../forms';
import { RequiredStringLengthValidatorFactory } from '../../vocab-forms/validation';
import { LogInForm } from './log-in.form';

@Injectable()
export class LogInFormValidationProvider implements FormValidationProvider<LogInForm> {
  public constructor(private readonly requiredFactory: RequiredStringLengthValidatorFactory) {

  }

  public provide(form: FormGroup<LogInForm>): FormGroup<LogInForm> {
    const controls: LogInForm = form.controls;
    controls.username.addValidators(this.requiredFactory.create(6, 25));
    controls.password.addValidators(this.requiredFactory.create(8, 25));
    return form;
  }
}
