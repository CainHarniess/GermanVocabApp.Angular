import { AbstractControl, ValidatorFn } from "@angular/forms";

export function createMockvalidatorVisitor(): any {
  return {
    addValidator: (validator: ValidatorFn, control: AbstractControl<any, any>) => { },
    removeValidator: (validator: ValidatorFn, control: AbstractControl<any, any>) => { },
  };
}

export function createMockListForm(): any {
  return {
    controls: {
      wordType: {
        addValidators: function () { },
        updateValueAndValidity: function () { },
      },
      english: {
        addValidators: function () { },
        updateValueAndValidity: function () { },
      },
      german: {
        addValidators: function () { },
        updateValueAndValidity: function () { },
      },
    }
  };;
}
