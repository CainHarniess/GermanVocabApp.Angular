import { Injectable } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { ValidationError } from ".";

@Injectable()
export class RequiredWithLengthMessageProvider {
  public provideFor(control: FormControl<string | null>): Observable<string | null> {
    return control.valueChanges
      .pipe(
        map((_: string | null) => this.parseValidationErrors(control.errors))
      );
  }

  private parseValidationErrors(errors: ValidationErrors | null): string | null {
    if (errors === null) {
      return null;
    }
    return (errors as ValidationError).message;
  }
}
