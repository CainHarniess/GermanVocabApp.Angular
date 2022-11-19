import { VocabList, VocabListItem } from "../app/vocab/models";
import { Undefined } from "../core/types";

const stubList: VocabList = {
  userId: "2ceba66a-eb56-4e70-b9a2-8ed03c4c5262",
  name: "Stub Vocab List",
  listItems: [] as VocabListItem[],
  authorName: "Stubby McGee"
};

export class StubVocabListBuilder {
  private stub: VocabList;

  public constructor() {
    this.stub = { ...stubList };
  }

  public static stub(): StubVocabListBuilder {
    return new StubVocabListBuilder();
  }

  public create(): StubVocabListBuilder {
    this.stub = { ...stubList };
    return this;
  }

  public withId(id: Undefined<string>): StubVocabListBuilder {
    this.stub.id = id;
    return this;
  }

  public withUserId(id: string): StubVocabListBuilder {
    this.stub.userId = id;
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

  public withItems(items: VocabListItem[]): StubVocabListBuilder {
    this.stub.listItems = items;
    return this;
  }

  public build(): VocabList {
    return this.stub;
  }

  public reset(): void {
    this.stub = { ...stubList };
  }
}
