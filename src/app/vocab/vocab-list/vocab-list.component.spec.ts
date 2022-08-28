import { waitForAsync } from "@angular/core/testing";
import { of } from "rxjs";
import { ResolvedData, WordType } from "../models/data";
import { VocabList } from "../models/vocab-list.interface";
import { VocabListComponent } from "./vocab-list.component";


describe("VocabListComponent", () => {
  const mockVocabList: VocabList = {
    name: 'Kitchen',
    listItems: [
      {
        id: '473573a8-86d7-4b64-8e51-96fead598a7c',
        wordType: WordType.Verb,
        german: 'essen',
        english: 'to reply, retort',
      }
    ],
    authorName: "Cain Harniess"
  };
  let component: VocabListComponent;
  let mockActivatedRoute: any;

  beforeEach(() => {
    const mockData: { [key: string]: VocabList } = {};
    mockData[ResolvedData.ResolvedList] = mockVocabList;
    mockActivatedRoute = jasmine.createSpyObj("mockActivatedRoute", [], { data: of(mockData) });
    component = new VocabListComponent(mockActivatedRoute);
  });

  describe("vocabList$", () => {
    it("Should receive data from activated route.", waitForAsync(() => {
      component.vocabList$.subscribe((result: VocabList) => {
        expect(result).toBe(mockVocabList);
      });
    }));
  });

});
