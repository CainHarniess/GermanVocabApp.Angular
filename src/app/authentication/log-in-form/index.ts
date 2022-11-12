import { inject, InjectionToken } from '@angular/core';
import { RequiredStringLengthValidatorFactory } from '../../../core/validation';
import { FormValidationProvider } from '../../forms';
import { LogInFormValidationProvider } from './log-in-form-validation.provider';
import { LogInForm } from './log-in.form';

export { LogInForm } from './log-in.form';
export { LogInFormBuilder } from './log-in-form.builder';
export { LogInFormComponent } from './log-in-form.component';
export { LogInFormValidationProvider } from './log-in-form-validation.provider';

export const LOG_IN_FORM_VALIDATION_PROVIDER = new InjectionToken<FormValidationProvider<LogInForm>>(
  'Manually constructed LogInServiceProvider', {
  providedIn: 'root',
  factory: () => new LogInFormValidationProvider(inject(RequiredStringLengthValidatorFactory)),
});
