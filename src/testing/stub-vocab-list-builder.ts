import { VocabList, VocabListItem } from "../app/vocab/models";
import { Undefined } from "../core/types";

export class StubVocabListBuilder {
  private stub: VocabList;

  private constructor() {
    this.stub = {
      userId: "2ceba66a-eb56-4e70-b9a2-8ed03c4c5262",
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

  public withName(name: string): StubVocabListBuilder {
    this.stub.name = name;
    return this;
  }

  public withDescription(description: string): StubVocabListBuilder {
    this.stub.description = description;
    return this;
  }

  public build(): VocabList {
    return this.stub;
  }
}
