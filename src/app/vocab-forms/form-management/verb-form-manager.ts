import { FormControl, Validators } from "@angular/forms";
import { AuxiliaryVerb } from "../../vocab/models/data/auxiliary-verb.enum";
import { ReflexiveCase } from "../../vocab/models/data/case.enum";
import { WordTypeFormManager } from "./word-type-form-manager";


export class VerbFormManager extends WordTypeFormManager {
  public override configureForm(): void {
    const auxiliaryVerbControl: FormControl<AuxiliaryVerb | null> = this.controls.auxiliaryVerb!;
    auxiliaryVerbControl.addValidators([Validators.required]);
    auxiliaryVerbControl.updateValueAndValidity();

    const isIrregularControl: FormControl<boolean | null> = this.controls.isIrregular;
    isIrregularControl.setValue(false);
    isIrregularControl.addValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();

    const isSeparableControl: FormControl<boolean | null> = this.controls.isSeparable;
    isSeparableControl.setValue(false);
    isSeparableControl.addValidators([Validators.required]);
    isSeparableControl.updateValueAndValidity();

    const isTransitiveControl: FormControl<boolean | null> = this.controls.isTransitive;
    isTransitiveControl.setValue(false);
    isTransitiveControl.addValidators([Validators.required]);
    isTransitiveControl.updateValueAndValidity();
  }

  public override removeConfiguration(): void {
    const reflexiveCaseControl: FormControl<ReflexiveCase | null> = this.controls.reflexiveCase;
    reflexiveCaseControl.reset();

    const auxiliaryVerbControl: FormControl<AuxiliaryVerb | null> = this.controls.auxiliaryVerb!;
    auxiliaryVerbControl.reset();
    auxiliaryVerbControl.removeValidators([Validators.required]);
    auxiliaryVerbControl.updateValueAndValidity();

    const isIrregularControl: FormControl<boolean | null> = this.controls.isIrregular;
    isIrregularControl.reset();
    isIrregularControl.removeValidators([Validators.required]);
    isIrregularControl.updateValueAndValidity();

    const thirdPersonPresentControl: FormControl<string | null> = this.controls.thirdPersonPresent;
    thirdPersonPresentControl.reset();
    thirdPersonPresentControl.removeValidators([Validators.required]);
    thirdPersonPresentControl.updateValueAndValidity();

    const thirdPersonImperfectControl: FormControl<string | null> = this.controls.thirdPersonImperfect;
    thirdPersonImperfectControl.reset();
    thirdPersonImperfectControl.removeValidators([Validators.required]);
    thirdPersonImperfectControl.updateValueAndValidity();

    const perfectControl: FormControl<string | null> = this.controls.perfect;
    perfectControl.reset();
    perfectControl.removeValidators([Validators.required]);
    perfectControl.updateValueAndValidity();

    const isSeparableControl: FormControl<boolean | null> = this.controls.isSeparable;
    isSeparableControl.reset();
    isSeparableControl.removeValidators([Validators.required]);
    isSeparableControl.updateValueAndValidity();

    const isTransitiveControl: FormControl<boolean | null> = this.controls.isTransitive;
    isTransitiveControl.reset();
    isTransitiveControl.removeValidators([Validators.required]);
    isTransitiveControl.updateValueAndValidity();
  }
}
