import { FormControl, Validators } from "@angular/forms";
import { FixedPlurality } from "../../vocab/models/data/fixed-plurality.enum";
import { Gender } from "../../vocab/models/data/gender.enum";

import { WordTypeFormManager } from "./word-type-form-manager";

export class NounFormManager extends WordTypeFormManager {
    public override configureForm(): void {
      const genderControl: FormControl<Gender | null> = this.controls.gender;
      genderControl.addValidators([Validators.required]);
      genderControl.updateValueAndValidity();

      const fixedPluralityControl: FormControl<FixedPlurality | null> = this.controls.fixedPlurality;
      fixedPluralityControl.setValue(FixedPlurality.None);
      fixedPluralityControl.addValidators([Validators.required]);
      fixedPluralityControl.updateValueAndValidity();

      const isWeakMasculineNounControl: FormControl<boolean | null> = this.controls.isWeakMasculineNoun;
      isWeakMasculineNounControl.setValue(false);
      isWeakMasculineNounControl.addValidators([Validators.required]);
      isWeakMasculineNounControl.updateValueAndValidity();
    }

  public override removeConfiguration(): void {
    const genderControl: FormControl<Gender | null> = this.controls.gender!;
    genderControl.reset();
    genderControl.removeValidators([Validators.required]);
    genderControl.updateValueAndValidity();

    const prepositionControl: FormControl<string | null> = this.controls.preposition;
    prepositionControl.reset();

    const prepositionCaseControl: FormControl<string | null> = this.controls.prepositionCase;
    prepositionCaseControl.reset();

    const pluralControl: FormControl<string | null> = this.controls.plural;
    pluralControl.reset();

    const fixedPluralityControl: FormControl<FixedPlurality | null> = this.controls.fixedPlurality!;
    fixedPluralityControl.reset();
    fixedPluralityControl.removeValidators([Validators.required]);
    fixedPluralityControl.updateValueAndValidity();

    const isWeakMasculineNounControl: FormControl<boolean | null> = this.controls.isWeakMasculineNoun!;
    isWeakMasculineNounControl.reset();
    isWeakMasculineNounControl.removeValidators([Validators.required]);
    isWeakMasculineNounControl.updateValueAndValidity();
  }
}
