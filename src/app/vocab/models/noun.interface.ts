import { NounGender } from "./data/noun-gender.enum";

export interface Noun {
  id?: string;
  gender: NounGender;
  german: string
  english: string;
}
