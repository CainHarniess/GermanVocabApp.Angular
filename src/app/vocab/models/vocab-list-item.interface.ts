import { Entity } from "../../shared/models/entity.interface";
import { AuxiliaryVerb, Case, FixedPlurality, Gender, ReflexiveCase, Transitivity, WordType } from "./data";

export interface VocabListItem extends Entity {
  wordType: WordType;
  isWeakMasculineNoun?: boolean;
  reflexiveCase?: ReflexiveCase;
  //TODO: Convert to Separability enum with a None value.
  isSeparable?: boolean;
  transitivity?: Transitivity;
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
