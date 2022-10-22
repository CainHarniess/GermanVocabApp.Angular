import { AbstractControl, ValidatorFn } from "@angular/forms";

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
