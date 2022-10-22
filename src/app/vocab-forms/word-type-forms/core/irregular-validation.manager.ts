import { FormControl, FormGroup, Validators } from "@angular/forms";
import { VocabListItemForm } from "../../models";
import { WordTypeValidationManager } from "./word-type-validation.manager";

export abstract class IrregularValidationManager extends WordTypeValidationManager {
  public addValidation(form: FormGroup<VocabListItemForm>): void {
    const isIrregularControl: FormControl<boolean | null> = form.controls.isIrregular;
    isIrregularControl.addValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();

    this.addValidationProtected(form);
    this.addIrregularFollowFieldValidation(form);
  }

  public removeValidation(form: FormGroup<VocabListItemForm>): void {
    const isIrregularControl: FormControl<boolean | null> = form.controls.isIrregular;
    isIrregularControl.removeValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();

    this.removeValidationProtected(form);
    this.removeIrregularFollowFieldValidation(form);
  }

  protected abstract addValidationProtected(form: FormGroup<VocabListItemForm>): void;

  protected abstract addIrregularFollowFieldValidation(form: FormGroup<VocabListItemForm>): void;

  protected abstract removeValidationProtected(form: FormGroup<VocabListItemForm>): void;

  protected abstract removeIrregularFollowFieldValidation(form: FormGroup<VocabListItemForm>): void;
}
