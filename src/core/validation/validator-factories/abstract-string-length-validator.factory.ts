import { ValidatorFn } from "@angular/forms";

export abstract class AbstractStringLengthValidatorFactory {
  public create(lower: number, upper: number): ValidatorFn {
    if (lower > upper) {
      throw new Error(`Specified minimum length (${lower}) is greater than specified maximum length (${upper}).`);
    }

    if (lower < 0) {
      throw new Error(`Lower bound may not be negative (${lower}).`);
    }

    if (upper < 0) {
      throw new Error(`Upper bound may not be negative (${lower}).`);
    }
    return this.createValidator(lower, upper);
  }

  protected abstract createValidator(lower: number, upper: number): ValidatorFn;
}
