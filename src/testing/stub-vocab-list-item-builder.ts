import { VocabListItem } from "../app/vocab/models";
import { WordType } from "../app/vocab/models/data";
import { Undefined } from "../core/types";

export class StubVocabListItemBuilder {
  private stub: VocabListItem;

  private constructor() {
    this.stub = {
      wordType: WordType.Noun,
      english: "stub",
      german: "Stummel"
    }
  }

  public static stub(): StubVocabListItemBuilder {
    return new StubVocabListItemBuilder();
  }

  public withId(id: Undefined<string>): StubVocabListItemBuilder {
    this.stub.id = id;
    return this;
  }

  public withWordType(wordType: WordType): StubVocabListItemBuilder {
    this.stub.wordType = wordType;
    return this;
  }

  public withEnglish(english: string): StubVocabListItemBuilder {
    this.stub.english = english;
    return this;
  }

  public withGerman(german: string): StubVocabListItemBuilder {
    this.stub.german = german;
    return this;
  }

  public build(): VocabListItem {
    return this.stub;
  }
}
