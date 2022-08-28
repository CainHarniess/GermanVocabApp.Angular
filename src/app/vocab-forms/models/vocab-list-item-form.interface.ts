import { FormControl } from "@angular/forms";
import { AuxiliaryVerb, Case, FixedPlurality, Gender, ReflexiveCase, WordType } from "../../vocab/models/data";

export interface VocabListItemForm {
  wordType: FormControl<WordType | null>;
  isWeakMasculineNoun: FormControl<boolean | null>;
  reflexiveCase: FormControl<ReflexiveCase | null>;
  isSeparable: FormControl<boolean | null>;
  isTransitive: FormControl<boolean | null>;
  thirdPersonPresent: FormControl<string | null>;
  thirdPersonImperfect: FormControl<string | null>;
  auxiliaryVerb: FormControl<AuxiliaryVerb | null>;
  perfect: FormControl<string | null>;
  gender: FormControl<Gender | null>;
  german: FormControl<string | null>;
  plural: FormControl<string | null>;
  preposition: FormControl<string | null>;
  prepositionCase: FormControl<Case | null>;
  comparative: FormControl<string | null>;
  superlative: FormControl<string | null>;
  english: FormControl<string | null>;
  fixedPlurality: FormControl<FixedPlurality | null>
  isIrregular: FormControl<boolean | null>;
}
