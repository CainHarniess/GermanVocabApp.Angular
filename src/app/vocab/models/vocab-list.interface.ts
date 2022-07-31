import { Noun } from "./noun.interface";

export interface VocabList {
  id?: string,
  name: string,
  description?: string,
  listItems: Noun[]
}
