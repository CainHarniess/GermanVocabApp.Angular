import { AuxiliaryVerb } from "./data/auxiliary-verb.enum";
import { Case } from "./data/case.enum";
import { FixedPlurality } from "./data/fixed-plurality.enum";
import { Gender } from "./data/gender.enum";
import { WordType } from "./data/word-type.enum";

import { Entity } from "../../shared/models/entity.interface";

export interface VocabListItem extends Entity {
  wordType: WordType;
  isWeakMasculineNoun?: boolean;
  reflexiveCase?: Case;
  isSeparable?: boolean;
  isTransitive?: boolean;
  thirdPersonPresent?: string;
  thirdPersonImperfect?: string;
  auxiliaryVerb?: AuxiliaryVerb;
  perfect?: string;
  gender?: Gender;
  german: string;
  plural?: string;
  preposition?: string;
  prepositionCase?: Case;
  comparative?: string;
  superlative?: string;
  english: string;
  vocabListId?: string;
  fixedPlurality?: FixedPlurality
}
