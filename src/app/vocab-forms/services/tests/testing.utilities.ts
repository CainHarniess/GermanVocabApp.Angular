import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";
import { VocabListItemForm } from "../../models";

export function createMockvalidatorVisitor(): any {
  return {
    addValidator: (validator: ValidatorFn, control: AbstractControl<any, any>) => { },
    removeValidator: (validator: ValidatorFn, control: AbstractControl<any, any>) => { },
  };
}

export function createMockItemForm(): any {
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
  };
}

export function createMockItemValidationProvider(): any {
  return {
    addValidationTo: (form: FormGroup<VocabListItemForm>) => { },
  }
}
