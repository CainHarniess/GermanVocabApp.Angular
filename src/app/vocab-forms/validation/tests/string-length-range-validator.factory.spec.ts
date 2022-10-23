import { FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { LengthRangeValidatorFactory, ValidationError } from "..";
import { RandomStringGenerator } from "../../../../utilities";
import { maxLength, minLength } from "../validator-names";

fdescribe("StringLengthRangeValidatorFactory", () => {
  let stringGenerator: RandomStringGenerator;

  let factory: LengthRangeValidatorFactory;
  let validator: ValidatorFn;
  let control: FormControl<string | null>;
  let result: ValidationErrors | null;

  beforeAll(() => {
    stringGenerator = new RandomStringGenerator();
    factory = new LengthRangeValidatorFactory();
    validator = factory.create(3, 25);
  });

  it("Should return null if null input.", () => {
    control = new FormControl<string | null>(null);
    result = validator(control);
    expect(result).toBeNull();
  });

  it("Should return null if input is empty string.", () => {
    control = new FormControl<string | null>("");
    result = validator(control);
    expect(result).toBeNull();
  });

  it("Should return minLength error is input is shorter than mininmum length.", () => {
    control = new FormControl<string | null>(stringGenerator.withLength(2));

    result = validator(control);

    validateErrorName(result, minLength);
  });

  it("Should return maxLength error is input is greater than maximum length.", () => {
    control = new FormControl<string | null>(stringGenerator.withLength(26));

    result = validator(control);

    validateErrorName(result, maxLength);
  });

  it("Should throw an exception if the minimum length is greater than the maximum length.", () => {
    const expectedMessage: string = "Specified minimum length (7) is greater than specified maximum length (3)."
    expect(function () { factory.create(7, 3) }).toThrowError(expectedMessage);
  });

  it("Should throw an exception if the minimum length is negative.", () => {
    const expectedMessage: string = "Lower bound may not be negative (-1).";
    expect(function () { factory.create(-1, 3) }).toThrowError(expectedMessage);
  });

  it("Should throw an exception if the maximum length is negative.", () => {
    expect(function () { factory.create(3, -5) }).toThrowError();
  });
});

function validateErrorName(result: ValidationErrors | null, validatorName: string): void {
  expect(result).not.toBeNull();
  if (result === null) {
    return;
  }
  const error: ValidationError = result as ValidationError;
  expect(error.name).toBe(validatorName)
}
