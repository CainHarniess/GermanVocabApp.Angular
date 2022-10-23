import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ControlValidatorVisitor {
  public addValidator(validator: ValidatorFn, control: AbstractControl<any, any>): void {
    control.addValidators(validator);
    control.updateValueAndValidity();
  }

  public removeValidator(validator: ValidatorFn, control: AbstractControl<any, any>): void {
    control.removeValidators(validator);
    control.updateValueAndValidity();
  }
}
