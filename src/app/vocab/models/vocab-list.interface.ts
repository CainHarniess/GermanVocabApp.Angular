import { Entity } from "../../shared/models/entity.interface";
import { VocabListItem } from "./vocab-list-item.interface";

export interface VocabList extends Entity {
  name: string,
  description?: string,
  listItems: VocabListItem[],
  authorName: string,
}
