import { FormControl, Validators } from "@angular/forms";
import { WordType } from "../../vocab/models/data/word-type.enum";
import { WordTypeFormManager } from "./word-type-form-manager";


export class AdjectiveFormManager extends WordTypeFormManager {
  public get wordType(): WordType { return WordType.Adjective; }

  public override configureForm(): void {
    const isIrregularControl: FormControl<boolean | null> = this.controls.isIrregular;
    isIrregularControl.setValue(false);
    isIrregularControl.addValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();
  }

  public override removeConfiguration(): void {
    const isIrregularControl: FormControl<boolean | null> = this.controls.isIrregular;
    isIrregularControl.setValue(null);
    isIrregularControl.removeValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();

    // TODO: Clear comparative and superlative.
  }
}
