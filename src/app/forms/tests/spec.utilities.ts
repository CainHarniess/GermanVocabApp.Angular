import { ValidatorFn } from "@angular/forms";

export function createMockControl(): any {
  return {
    addValidators: (validator: ValidatorFn | ValidatorFn[]) => { },
    removeValidators: (validator: ValidatorFn | ValidatorFn[]) => { },
    updateValueAndValidity: () => { },
  };
}
