import { AbstractControl, ValidatorFn } from "@angular/forms";

// TODO: Move to forms module.
export abstract class AbstractValidationProvider {
  protected addValidator(validator: ValidatorFn, control: AbstractControl<any, any>): void {
    control.addValidators([validator]);
    control.updateValueAndValidity();
  }

  protected removeValidator(validator: ValidatorFn, control: AbstractControl<any, any>): void {
    control.removeValidators([validator]);
    control.updateValueAndValidity();
  }
}
