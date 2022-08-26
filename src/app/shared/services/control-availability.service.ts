import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { makeArray } from '../../../utilities/array.utilities';

@Injectable({
  providedIn: 'root'
})
export class ControlAvailabilityService {
  public configure(controls: AbstractControl<any> | AbstractControl<any>[], condition: boolean): void {
    const controlArray: AbstractControl<any>[] = makeArray(controls);

    let controlAction: (control: AbstractControl<any>) => void = condition ? control => control.addValidators([Validators.required])
      : control => {
        control.removeValidators([Validators.required]);
        control.setValue(null);
      };
    controlArray.forEach((control: AbstractControl<any>) => {
      controlAction(control);
      control.updateValueAndValidity();
    });
  }
}
