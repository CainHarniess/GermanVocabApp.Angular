import { AbstractControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class RequiredIfTouchedErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl<any, any> | null, form: FormGroupDirective | NgForm | null): boolean {
    if (!control || !control.invalid || !control.errors) {
      return false;
    }

    if (form?.submitted) {
      return true;
    }

    if (control.touched || control.errors["name"] !== "required") {
      return true;
    }
    return false
  }
}
