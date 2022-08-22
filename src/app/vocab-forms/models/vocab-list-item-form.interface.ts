import { FormControl } from "@angular/forms";
import { AuxiliaryVerb } from "../../vocab/models/data/auxiliary-verb.enum";
import { Case, ReflexiveCase } from "../../vocab/models/data/case.enum";
import { FixedPlurality } from "../../vocab/models/data/fixed-plurality.enum";
import { Gender } from "../../vocab/models/data/gender.enum";
import { WordType } from "../../vocab/models/data/word-type.enum";

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
