import { UserEntity } from "../../shared/models";
import { VocabListItem } from "./vocab-list-item.interface";

export interface VocabList extends UserEntity {
  name: string,
  description?: string | null,
  listItems: VocabListItem[],
  authorName: string,
}
