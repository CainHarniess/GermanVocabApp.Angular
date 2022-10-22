import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ValidationError } from "./validation-result";

@Injectable()
export class LengthRangeValidatorFactory {
  public create(minLength: number, maxLength: number): ValidatorFn {
    if (minLength > maxLength) {
      throw new Error(`Specified minimum length ${minLength} is greater than specified maximum length ${maxLength}.`);
    }
    return (control: AbstractControl<string>): ValidationErrors | null => {
      return lengthRange(control, minLength, maxLength);
    };
  }
}

function lengthRange(control: AbstractControl<string>, minLength: number, maxLength: number): ValidationErrors | null {
  const value: string = control?.value;
  if (value === null) {
    return null
  }
  const stringLength: number = value.length;

  if (stringLength < minLength) {
    return new ValidationError("minLength", `Input must contain ${minLength} character(s) or more.`,
      minLength, stringLength);
  }

  if (stringLength > maxLength) {
    return new ValidationError("maxLength", `Input may not contain more than ${maxLength} character(s).`,
      maxLength, stringLength);
  }
  return null;
}
