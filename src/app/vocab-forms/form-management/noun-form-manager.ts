import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FixedPlurality, Gender, WordType } from "../../vocab/models/data";
import { VocabListItemForm } from "../models";
import { NounValidationManager } from "./noun-validation.manager";

import { WordTypeFormManager } from "./word-type-form-manager";

@Injectable()
export class NounFormManager extends WordTypeFormManager {
  public get wordType(): WordType { return WordType.Noun; }

  public constructor(validationManager: NounValidationManager) {
    super(validationManager);
  }

  public override configureForm(form: FormGroup<VocabListItemForm>): void {
    this.validationManager.addValidation(form);

    const fixedPluralityControl: FormControl<FixedPlurality | null> = form.controls.fixedPlurality;
    fixedPluralityControl.setValue(FixedPlurality.None);

    const isWeakMasculineNounControl: FormControl<boolean | null> = form.controls.isWeakMasculineNoun;
    isWeakMasculineNounControl.setValue(false);

  }

  public override removeConfiguration(form: FormGroup<VocabListItemForm>): void {
    this.validationManager.removeValidation(form);

    const genderControl: FormControl<Gender | null> = form.controls.gender!;
    genderControl.reset();

    const prepositionControl: FormControl<string | null> = form.controls.preposition;
    prepositionControl.reset();

    const prepositionCaseControl: FormControl<string | null> = form.controls.prepositionCase;
    prepositionCaseControl.reset();

    const pluralControl: FormControl<string | null> = form.controls.plural;
    pluralControl.reset();

    const fixedPluralityControl: FormControl<FixedPlurality | null> = form.controls.fixedPlurality!;
    fixedPluralityControl.reset();

    const isWeakMasculineNounControl: FormControl<boolean | null> = form.controls.isWeakMasculineNoun!;
    isWeakMasculineNounControl.reset();
  }
}
