import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

import { debounceTime, map, Observable, startWith } from 'rxjs';

import { Null } from "../../../core/types";

@Injectable()
export class ListTitleObservableBuilder {
  public build(defaultValue: string, control: FormControl<Null<string>>): Observable<string> {
    return control.valueChanges
      .pipe(
        startWith(defaultValue),
        debounceTime(300),
        map((val: string | null) => (!val || val === "") ? defaultValue : val),
      );
  }
}
