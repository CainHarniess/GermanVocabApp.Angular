import { FormControl, FormGroup, Validators } from "@angular/forms";
import { VocabListItemForm } from "../models";
import { WordTypeValidationManager } from "./word-type-validation.manager";

export abstract class IrregularValidationManager extends WordTypeValidationManager {

  public addValidation(form: FormGroup<VocabListItemForm>): void {
    const isIrregularControl: FormControl<boolean | null> = form.controls.isIrregular;
    isIrregularControl.addValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();

    this.addWordTypeValidation(form);
    this.addIrregularValidation(form);
  }

  public removeValidation(form: FormGroup<VocabListItemForm>): void {
    const isIrregularControl: FormControl<boolean | null> = form.controls.isIrregular;
    isIrregularControl.removeValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();

    this.removeWordTypeValidation(form);
    this.removeIrregularValidation(form);
  }

  protected abstract addWordTypeValidation(form: FormGroup<VocabListItemForm>): void;

  protected abstract addIrregularValidation(form: FormGroup<VocabListItemForm>): void;

  protected abstract removeWordTypeValidation(form: FormGroup<VocabListItemForm>): void;

  protected abstract removeIrregularValidation(form: FormGroup<VocabListItemForm>): void;
}
