import { Entity } from "../../shared/models/entity.interface";
import { NounGender } from "./data/noun-gender.enum";

export interface Noun extends Entity {
  gender: NounGender;
  german: string
  english: string;
  vocabListId?: string;
}
