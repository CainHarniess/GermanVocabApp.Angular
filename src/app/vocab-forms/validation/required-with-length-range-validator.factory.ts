import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ValidationError } from ".";
import { AbstractStringLengthValidatorFactory } from "./abstract-string-length-validator.factory";

@Injectable()
export class RequiredWithLengthRangeValidatorFactory extends AbstractStringLengthValidatorFactory {
  protected createValidator(minLength: number, maxLength: number): ValidatorFn {
    return (control: AbstractControl<any, any>): ValidationErrors | null => {
      return requiredWithLengthRange(control, minLength, maxLength);
    };
  }
}

function requiredWithLengthRange(control: AbstractControl<any, any>, minLength: number, maxLength: number): ValidationErrors | null {
  const value: any = control?.value;
  if (value === null) {
    return new ValidationError("required", "Input must be provided.");
  }

  if (typeof value !== "string") {
    return null;
  }
  const stringValue: string = value as string;
  const stringLength: number = stringValue.length;
  if (stringLength === 0) {
    return new ValidationError("required", "Input must be provided.");
  }


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

