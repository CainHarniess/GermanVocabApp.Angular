import { FormControl, FormGroup, Validators } from "@angular/forms";
import { WordTypeFormManager } from ".";
import { VocabListItemForm } from "../models";

export abstract class IrregularFormManager extends WordTypeFormManager {
  public override configureForm(form: FormGroup<VocabListItemForm>): void {
    this.configureIrregularControl(form);
  }

  protected abstract removeIrregularDependents(form: FormGroup<VocabListItemForm>): void;

  protected configureIrregularControl(form: FormGroup<VocabListItemForm>): void {
    const isIrregularControl: FormControl<boolean | null> = form.controls.isIrregular;
    isIrregularControl.setValue(false);
    isIrregularControl.addValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();
  }

  protected cacheAndRemoveIrregularControl(form: FormGroup<VocabListItemForm>): boolean | null {
    const isIrregularControl: FormControl<boolean | null> = form.controls.isIrregular;
    const isIrregular: boolean | null = isIrregularControl.value;
    isIrregularControl.setValue(null);
    isIrregularControl.removeValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();
    return isIrregular;
  }
}
