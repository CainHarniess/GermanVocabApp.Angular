import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { AbstractStringLengthValidatorFactory } from ".";
import { ValidationError } from "../";
import { maxLength, minLength } from "../validator-names";

@Injectable()
export class StringLengthValidatorFactory extends AbstractStringLengthValidatorFactory {
  protected override createValidator(lower: number, upper: number): ValidatorFn {
    return (control: AbstractControl<string | null>): ValidationErrors | null => {
      return lengthRange(control, lower, upper);
    };
  }
}

function lengthRange(control: AbstractControl<string | null>, lower: number, upper: number): ValidationErrors | null {
  const value: string | null = control.value;
  if (value === null) {
    return null;
  }
  const stringLength: number = value.length;
  if (stringLength === 0) {
    return null;
  }
  if (stringLength < lower) {
    return new ValidationError(minLength, `Input must contain ${lower} character(s) or more.`,
      lower, stringLength);
  }

  if (stringLength > upper) {
    return new ValidationError(maxLength, `Input may not contain more than ${upper} character(s).`,
      upper, stringLength);
  }
  return null;
}
