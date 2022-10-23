import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { Observable, takeUntil } from "rxjs";
import { ControlValidatorVisitor } from ".";

@Injectable({
  providedIn: 'root'
})
export class FollowingControlValidatorVisitor {
  public constructor(private readonly controlValidationVisitor: ControlValidatorVisitor) {

  }

  public configure(options: FollowingControlValidatorOptions): void {
    this.configureInternal(options.control, options.isVisible$, options.notifier$,
      options.validator);
  }

  private configureInternal(control: AbstractControl<any>, isVisible$: Observable<boolean>,
    notifier$: Observable<boolean>, validator: ValidatorFn): void {
    isVisible$.pipe(takeUntil(notifier$)).subscribe((isVisible: boolean) => {
      this.updateValidators(control, isVisible, validator);
    });
  }

  private updateValidators(control: AbstractControl<any>,
    isVisible: boolean, validator: ValidatorFn) {
    if (isVisible) {
      control.markAsUntouched();
      this.controlValidationVisitor.addValidator(validator, control);
      return;
    }
    this.controlValidationVisitor.removeValidator(validator, control);
    control.setValue(null);
  }
}

export class FollowingControlValidatorOptions {
  public constructor(public readonly control: AbstractControl<any>,
    public readonly isVisible$: Observable<boolean>,
    public readonly notifier$: Observable<boolean>,
    public readonly validator: ValidatorFn) {

  }
}
