import { FormControl, Validators } from "@angular/forms";
import { WordTypeFormManager } from "./word-type-form-manager";

export abstract class IrregularFormManager extends WordTypeFormManager {
  public override configureForm(): void {
    this.configureIrregularControl();
  }

  protected abstract removeIrregularDependents(): void;

  protected configureIrregularControl(): void {
    const isIrregularControl: FormControl<boolean | null> = this.controls.isIrregular;
    isIrregularControl.setValue(false);
    isIrregularControl.addValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();
  }

  protected cacheAndRemoveIrregularControl(): boolean | null {
    const isIrregularControl: FormControl<boolean | null> = this.controls.isIrregular;
    const isIrregular: boolean | null = isIrregularControl.value;
    isIrregularControl.setValue(null);
    isIrregularControl.removeValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();
    return isIrregular;
  }
}
