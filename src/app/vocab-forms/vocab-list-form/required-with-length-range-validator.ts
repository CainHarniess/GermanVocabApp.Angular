import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

function requiredWithLengthRange(control: AbstractControl<any, any>, minLength: number, maxLength: number): ValidationErrors | null {
  const value: any = control?.value;
  if (value === null) {
    return {
      "name": "required",
      "message": `Input must be provided.`,
    };
  }

  if (typeof value !== "string") {
    return null;
  }
  const stringValue: string = value as string;
  const stringLength: number = stringValue.length;
  if (stringLength === 0) {
    return {
      "name": "required",
      "message": `Input must be provided.`,
    };
  }


  if (stringLength < minLength) {
    return {
      "name": "maxLength",
      "actual": stringLength,
      "required": minLength,
      "message": `Input must contain ${minLength} character(s) or more.`,
    };
  }

  if (stringLength > maxLength) {
    return {
      "name": "maxLength",
      "actual": stringLength,
      "required": maxLength,
      "message": `Input may not contain more than ${maxLength} character(s).`,
    };
  }
  return null;
}

@Injectable()
export class RequiredWithLengthRangeValidatorFactory {
  public create(minLength: number, maxLength: number): ValidatorFn {
    return (control: AbstractControl<any, any>): ValidationErrors | null => {
      return requiredWithLengthRange(control, minLength, maxLength);
    };
  }
}
