import { VocabList, VocabListItem } from "../app/vocab/models";
import { Undefined } from "../core/types";

export class StubVocabListBuilder {
  private stub: VocabList;

  private constructor() {
    this.stub = {
      name: "Stub Vocab List",
      listItems: [] as VocabListItem[],
      authorName: "Stubby McGee"
    }
  }

  public static stub(): StubVocabListBuilder {
    return new StubVocabListBuilder();
  }

  public withId(id: Undefined<string>): StubVocabListBuilder {
    this.stub.id = id;
    return this;
  }

  public build(): VocabList {
    return this.stub;
  }
}
