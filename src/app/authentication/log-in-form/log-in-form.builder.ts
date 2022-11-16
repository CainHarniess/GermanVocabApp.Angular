import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LogInForm, LOG_IN_FORM_VALIDATION_PROVIDER } from '.';
import { Null } from '../../../core/types';
import { FormValidationProvider } from '../../forms';

@Injectable()
export class LogInFormBuilder {
  constructor(private readonly formBuilder: FormBuilder,
    @Inject(LOG_IN_FORM_VALIDATION_PROVIDER) 
    private readonly validationProvider: FormValidationProvider<LogInForm>) {

  }

  public build(): FormGroup<LogInForm> {
    const form: FormGroup<LogInForm> = this.formBuilder.group<LogInForm>({
      username: this.formBuilder.control<Null<string>>(null),
      password: this.formBuilder.control<Null<string>>(null),
    });
    return this.validationProvider.provide(form);
  }
}
