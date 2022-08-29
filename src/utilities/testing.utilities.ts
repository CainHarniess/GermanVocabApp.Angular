import { VocabList, VocabListItem } from "../app/vocab/models";
import { WordType } from "../app/vocab/models/data";

export function createStubListItem(wordType?: WordType): VocabListItem {
  return {
    wordType: wordType ?? WordType.Noun,
    english: "englishWord",
    german: "germanWord",
  };
}

export function createStubList(): VocabList {
  return {
    name: "Stub List",
    listItems: [] as VocabListItem[],
    authorName: "Stubby McStubface",
  };
}
