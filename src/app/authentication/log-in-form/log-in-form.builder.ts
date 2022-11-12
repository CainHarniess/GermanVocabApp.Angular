import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LogInForm } from '.';
import { Null } from '../../../core/types';

@Injectable()
export class LogInFormBuilder {
  constructor(private readonly formBuilder: FormBuilder) {

  }

  public build(): FormGroup<LogInForm> {
    const form: FormGroup<LogInForm> = this.formBuilder.group<LogInForm>({
      username: this.formBuilder.control<Null<string>>(null),
      password: this.formBuilder.control<Null<string>>(null),
    });
    return form;
  }
}
