import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { AbstractValidationProvider } from '../../../core';
import { makeArray } from '../../../utilities/array.utilities';

@Injectable({
  providedIn: 'root'
})
export class ControlAvailabilityService extends AbstractValidationProvider {
  public configure(controls: AbstractControl<any> | AbstractControl<any>[], condition: boolean): void {
    const controlArray: AbstractControl<any>[] = makeArray(controls);

    let controlAction: (control: AbstractControl<any>) => void = this.getControlAction(condition);

    controlArray.forEach((control: AbstractControl<any>) => {
      controlAction(control);
    });
  }

  private getControlAction(result: boolean): (control: AbstractControl<any>) => void {
    return result ? control => {
      control.markAsUntouched();
      this.addValidator(Validators.required, control);
    } : control => {
      this.removeValidator(Validators.required, control);
      control.setValue(null);
    };
  }
}
