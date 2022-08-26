import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ControlAvailabilityService {
  public configure(control: AbstractControl<any>, condition: boolean): void {
    if (condition) {
      control.addValidators([Validators.required]);
    } else {
      control.removeValidators([Validators.required]);
      control.setValue(null);
    }
    control.updateValueAndValidity();
  }
}
