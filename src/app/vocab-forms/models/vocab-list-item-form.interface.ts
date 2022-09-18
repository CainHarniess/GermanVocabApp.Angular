import { FormControl } from "@angular/forms";
import { Null } from "../../../core/types";
import { AuxiliaryVerb, Case, FixedPlurality, Gender, ReflexiveCase, Transitivity, WordType } from "../../vocab/models/data";
import { Separability } from "../../vocab/models/data/separability.enum";

export interface VocabListItemForm {
  wordType: FormControl<WordType | null>;
  isWeakMasculineNoun: FormControl<Null<boolean>>;
  reflexiveCase: FormControl<ReflexiveCase | null>;
  separability: FormControl<Separability | null>;
  transitivity: FormControl<Null<Transitivity>>;
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
  isIrregular: FormControl<Null<boolean>>;
}
