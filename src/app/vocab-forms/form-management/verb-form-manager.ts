import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Null } from "../../../core/types";
import { AuxiliaryVerb, ReflexiveCase, Separability, Transitivity, WordType } from "../../vocab/models/data";
import { VocabListItemForm } from "../models";
import { IrregularFormManager } from "./irregular-form-manager";
import { VerbValidationManager } from "./verb-validation.manager";

@Injectable()
export class VerbFormManager extends IrregularFormManager {
  public get wordType(): WordType { return WordType.Verb; }

  public constructor(validationManager: VerbValidationManager) {
    super(validationManager);
  }

  public override configureForm(form: FormGroup<VocabListItemForm>): void {
    this.validationManager.addValidation(form);
    super.configureForm(form);

    const SeparabilityControl: FormControl<Null<Separability>> = form.controls.separability;
    SeparabilityControl.setValue(Separability.None);

    const isTransitiveControl: FormControl<Null<Transitivity>> = form.controls.transitivity;
    isTransitiveControl.setValue(null);
  }

  public override removeConfiguration(form: FormGroup<VocabListItemForm>): void {
    this.validationManager.removeValidation(form);
    const reflexiveCaseControl: FormControl<Null<ReflexiveCase>> = form.controls.reflexiveCase;
    reflexiveCaseControl.reset();

    const auxiliaryVerbControl: FormControl<AuxiliaryVerb | null> = form.controls.auxiliaryVerb!;
    auxiliaryVerbControl.reset();

    const perfectControl: FormControl<Null<string>> = form.controls.perfect;
    perfectControl.reset();

    const separabilityControl: FormControl<Null<Separability>> = form.controls.separability;
    separabilityControl.reset();

    const isTransitiveControl: FormControl<Null<Transitivity>> = form.controls.transitivity;
    isTransitiveControl.reset();

    const wasIrregular: Null<boolean> | null = this.cacheAndRemoveIrregularControl(form);

    if (wasIrregular !== true) {
      return;
    }
    this.removeIrregularDependents(form);
  }

  protected override removeIrregularDependents(form: FormGroup<VocabListItemForm>): void {
    const thirdPersonPresentControl: FormControl<Null<string>> = form.controls.thirdPersonPresent;
    thirdPersonPresentControl.reset();

    const thirdPersonImperfectControl: FormControl<Null<string>> = form.controls.thirdPersonImperfect;
    thirdPersonImperfectControl.reset();
  }
}
