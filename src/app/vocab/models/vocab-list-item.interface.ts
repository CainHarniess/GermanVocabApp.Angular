import { Entity } from "../../shared/models/entity.interface";
import { AuxiliaryVerb, Case, FixedPlurality, Gender, ReflexiveCase, Transitivity, WordType } from "./data";
import { Separability } from "./data/separability.enum";

export interface VocabListItem extends Entity {
  wordType: WordType;
  isWeakMasculineNoun?: boolean | null;
  reflexiveCase?: ReflexiveCase | null;
  separability?: Separability | null;
  transitivity?: Transitivity | null;
  thirdPersonPresent?: string | null;
  thirdPersonImperfect?: string | null;
  auxiliaryVerb?: AuxiliaryVerb | null;
  perfect?: string | null;
  gender?: Gender | null;
  german: string;
  plural?: string | null;
  preposition?: string | null;
  prepositionCase?: Case | null;
  comparative?: string | null;
  superlative?: string | null;
  english: string;
  vocabListId?: string | null;
  fixedPlurality?: FixedPlurality | null;
}
