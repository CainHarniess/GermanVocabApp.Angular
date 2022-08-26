import { FormControl, Validators } from "@angular/forms";
import { IrregularFormManager } from "./irregular-form-manager";

export abstract class ModifierFormManager extends IrregularFormManager {
  public override removeConfiguration(): void {
    const wasIrregular: boolean | null = this.cacheAndRemoveIrregularControl();

    if (wasIrregular !== true) {
      return;
    }
    this.removeIrregularDependents();
  }

  protected override removeIrregularDependents(): void {
    const comparativeControl: FormControl<string | null> = this.controls.comparative;
    comparativeControl.setValue(null);
    comparativeControl.removeValidators([Validators.required]);
    comparativeControl.updateValueAndValidity();

    const superlativeControl: FormControl<string | null> = this.controls.superlative;
    superlativeControl.setValue(null);
    superlativeControl.removeValidators([Validators.required]);
    superlativeControl.updateValueAndValidity();
  }
}
