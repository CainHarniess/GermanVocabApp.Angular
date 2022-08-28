import { FormControl, Validators } from "@angular/forms";
import { AuxiliaryVerb, ReflexiveCase, WordType } from "../../vocab/models/data";
import { IrregularFormManager } from "./irregular-form-manager";

export class VerbFormManager extends IrregularFormManager {
  public get wordType(): WordType { return WordType.Verb; }

  public override configureForm(): void {
    super.configureForm();

    const auxiliaryVerbControl: FormControl<AuxiliaryVerb | null> = this.controls.auxiliaryVerb!;
    auxiliaryVerbControl.addValidators([Validators.required]);
    auxiliaryVerbControl.updateValueAndValidity();

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

    const wasIrregular: boolean | null = this.cacheAndRemoveIrregularControl();

    if (wasIrregular !== true) {
      return;
    }
    this.removeIrregularDependents();
  }

  protected override removeIrregularDependents(): void {
    const thirdPersonPresentControl: FormControl<string | null> = this.controls.thirdPersonPresent;
    thirdPersonPresentControl.reset();
    thirdPersonPresentControl.removeValidators([Validators.required]);
    thirdPersonPresentControl.updateValueAndValidity();

    const thirdPersonImperfectControl: FormControl<string | null> = this.controls.thirdPersonImperfect;
    thirdPersonImperfectControl.reset();
    thirdPersonImperfectControl.removeValidators([Validators.required]);
    thirdPersonImperfectControl.updateValueAndValidity();
  }
}
