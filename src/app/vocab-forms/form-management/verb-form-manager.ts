import { FormControl, Validators } from "@angular/forms";
import { Null } from "../../../core/types";
import { AuxiliaryVerb, ReflexiveCase, Separability, Transitivity, WordType } from "../../vocab/models/data";
import { IrregularFormManager } from "./irregular-form-manager";

export class VerbFormManager extends IrregularFormManager {
  public get wordType(): WordType { return WordType.Verb; }

  public override configureForm(): void {
    super.configureForm();

    const auxiliaryVerbControl: FormControl<AuxiliaryVerb | null> = this.controls.auxiliaryVerb!;
    auxiliaryVerbControl.addValidators([Validators.required]);
    auxiliaryVerbControl.updateValueAndValidity();

    const SeparabilityControl: FormControl<Null<Separability>> = this.controls.separability;
    SeparabilityControl.setValue(Separability.None);
    SeparabilityControl.addValidators([Validators.required]);
    SeparabilityControl.updateValueAndValidity();

    const isTransitiveControl: FormControl<Null<Transitivity>> = this.controls.transitivity;
    isTransitiveControl.setValue(null);
    isTransitiveControl.addValidators([Validators.required]);
    isTransitiveControl.updateValueAndValidity();
  }

  public override removeConfiguration(): void {
    const reflexiveCaseControl: FormControl<Null<ReflexiveCase>> = this.controls.reflexiveCase;
    reflexiveCaseControl.reset();

    const auxiliaryVerbControl: FormControl<AuxiliaryVerb | null> = this.controls.auxiliaryVerb!;
    auxiliaryVerbControl.reset();
    auxiliaryVerbControl.removeValidators([Validators.required]);
    auxiliaryVerbControl.updateValueAndValidity();

    const perfectControl: FormControl<Null<string>> = this.controls.perfect;
    perfectControl.reset();
    perfectControl.removeValidators([Validators.required]);
    perfectControl.updateValueAndValidity();

    const separabilityControl: FormControl<Null<Separability>> = this.controls.separability;
    separabilityControl.reset();
    separabilityControl.removeValidators([Validators.required]);
    separabilityControl.updateValueAndValidity();

    const isTransitiveControl: FormControl<Null<Transitivity>> = this.controls.transitivity;
    isTransitiveControl.reset();
    isTransitiveControl.removeValidators([Validators.required]);
    isTransitiveControl.updateValueAndValidity();

    const wasIrregular: Null<boolean> | null = this.cacheAndRemoveIrregularControl();

    if (wasIrregular !== true) {
      return;
    }
    this.removeIrregularDependents();
  }

  protected override removeIrregularDependents(): void {
    const thirdPersonPresentControl: FormControl<Null<string>> = this.controls.thirdPersonPresent;
    thirdPersonPresentControl.reset();
    thirdPersonPresentControl.removeValidators([Validators.required]);
    thirdPersonPresentControl.updateValueAndValidity();

    const thirdPersonImperfectControl: FormControl<Null<string>> = this.controls.thirdPersonImperfect;
    thirdPersonImperfectControl.reset();
    thirdPersonImperfectControl.removeValidators([Validators.required]);
    thirdPersonImperfectControl.updateValueAndValidity();
  }
}
