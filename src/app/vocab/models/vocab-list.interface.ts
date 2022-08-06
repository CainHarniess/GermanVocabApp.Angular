import { Entity } from "../../shared/models/entity.interface";
import { Noun } from "./noun.interface";

export interface VocabList extends Entity {
  id?: string,
  name: string,
  description?: string,
  listItems: Noun[],
  authorName: string,
}
