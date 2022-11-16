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
    userId: "6c878b8a-dc26-478c-8425-d518a499baaa",
    name: "Stub List",
    listItems: [] as VocabListItem[],
    authorName: "Stubby McStubface",
  };
}
