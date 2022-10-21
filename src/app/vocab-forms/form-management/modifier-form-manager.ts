import { FormControl, FormGroup } from "@angular/forms";
import { ModifierValidationManager } from ".";
import { VocabListItemForm } from "../models";
import { IrregularFormManager } from "./irregular-form-manager";

export abstract class ModifierFormManager extends IrregularFormManager {
  public override removeConfiguration(form: FormGroup<VocabListItemForm>): void {
    this.validationManager.addValidation(form);
    const wasIrregular: boolean | null = this.cacheAndRemoveIrregularControl(form);

    if (wasIrregular !== true) {
      return;
    }
    this.removeIrregularDependents(form);
  }

  protected override removeIrregularDependents(form: FormGroup<VocabListItemForm>): void {
    this.validationManager.removeValidation(form);

    const comparativeControl: FormControl<string | null> = form.controls.comparative;
    comparativeControl.setValue(null);

    const superlativeControl: FormControl<string | null> = form.controls.superlative;
    superlativeControl.setValue(null);
  }
}
