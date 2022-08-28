import { waitForAsync } from "@angular/core/testing";
import { of } from "rxjs";
import { ResolvedData, WordType } from "../models/data";
import { VocabList } from "../models/vocab-list.interface";
import { VocabListsComponent } from "./vocab-lists.component";


describe("VocabListsComponent", () => {
  const mockVocabLists: VocabList[] = [{
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
  }];
  let component: VocabListsComponent;
  let mockActivatedRoute: any;

  beforeEach(() => {
    const mockData: { [key: string]: VocabList[] } = {};
    mockData[ResolvedData.ResolvedLists] = mockVocabLists;
    mockActivatedRoute = jasmine.createSpyObj("mockActivatedRoute", [], { data: of(mockData) });
    component = new VocabListsComponent(mockActivatedRoute);
  });

  describe("vocabListsDisplay$", () => {
    it("Initial json$ value should be an empty array.", waitForAsync(() => {
      component.vocabListsDisplay$.subscribe((result: VocabList[]) => {
        expect(result).toEqual([]);
      });
    }));

    it("Should have value from activated route.", waitForAsync(() => {
      component.vocabLists$.subscribe((result: VocabList[]) => {
        
      });

      component.vocabListsDisplay$.subscribe((value: VocabList[]) => {
        expect(value).toBe(mockVocabLists)
      });
    }));
  });

  describe("jsonButtonLabel$", () => {
    it("Initial JSON button label value should Show JSON.", waitForAsync(() => {
      component.jsonButtonLabel$.subscribe((value: string) => {
        expect(value).toBe("Show JSON");
      });
    }));


    it("JSON button label should be Hide JSON after exportToJson called once.", waitForAsync(() => {
      component.exportToJson();
      component.jsonButtonLabel$.subscribe((value: string) => {
        expect(value).toBe("Hide JSON");
      });
    }));

    it("JSON button label should be Show JSON after exportToJson called twice.", waitForAsync(() => {
      component.exportToJson();
      component.exportToJson();
      component.jsonButtonLabel$.subscribe((value: string) => {
        expect(value).toBe("Show JSON");
      });
    }));
  });

  describe("vocabLists$", () => {
    it("Should pass activated route data to the vocabLists$ property.", waitForAsync(() => {
      component.vocabLists$.subscribe((result: VocabList[]) => {
        expect(result).toBe(mockVocabLists);
      });
    }));
  });

});
