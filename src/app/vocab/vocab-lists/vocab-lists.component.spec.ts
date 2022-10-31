import { waitForAsync } from "@angular/core/testing";
import { of } from "rxjs";
import { NotificationService } from "../../../core";
import { LogContent } from "../../../core/logging";

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
  let mockRouter: any;
  let mockActivatedRoute: any;
  let mockLogService: any = {
    trace: (content: LogContent) => { },
    debug: (content: LogContent) => { },
  };
  let mockNotificationService: NotificationService = {
    info: (message: string) => { },
    success: (message: string) => { },
    warn: (message: string) => { },
    error: (message: string) => { },
  }

  beforeEach(() => {
    const mockData: { [key: string]: VocabList[] } = {};
    mockData[ResolvedData.ResolvedLists] = mockVocabLists;
    mockRouter = jasmine.createSpyObj("mockRouter", ["navigate"]);
    mockActivatedRoute = jasmine.createSpyObj("mockActivatedRoute", [], { data: of(mockData) });
    component = new VocabListsComponent(mockLogService, mockRouter, mockActivatedRoute,
      mockNotificationService);
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

    it("Should update the showJson$ value to true when called once.", waitForAsync(() => {
      component.exportToJson();
      component.showJson$.subscribe((value: boolean) => {
        expect(value).toBeTrue();
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

  it("Should update the showJson$ value to true when called twice.", waitForAsync(() => {
    component.exportToJson();
    component.exportToJson();
    component.showJson$.subscribe((value: boolean) => {
      expect(value).toBeFalse();
    });
  }));

  describe("vocabLists$", () => {
    it("Should pass activated route data to the vocabLists$ property.", waitForAsync(() => {
      component.vocabLists$.subscribe((result: VocabList[]) => {
        expect(result).toBe(mockVocabLists);
      });
    }));
  });

  describe("showJson$", () => {
    it("Should have false as initial value.", waitForAsync(() => {
      component.showJson$.subscribe((result: boolean) => {
        expect(result).toBeFalse();
      });
    }));
  });

  describe("addList", () => {
    it("Should call Router.nagivate with correct arguments.", () => {
      component.addList();
      expect(mockRouter.navigate).toHaveBeenCalledOnceWith(["new"], {
        relativeTo: mockActivatedRoute,
      });
    });
  });

  describe("editList", () => {
    it("Should call Router.nagivate with correct arguments.", () => {
      const testId: string = "1234";
      component.editList(testId);
      expect(mockRouter.navigate).toHaveBeenCalledOnceWith([testId, "edit"], {
        relativeTo: mockActivatedRoute,
      });
    });
  });

  describe("viewList", () => {
    it("Should call Router.nagivate with correct arguments.", () => {
      const testId: string = "1234";
      component.viewList(testId);
      expect(mockRouter.navigate).toHaveBeenCalledOnceWith([testId], {
        relativeTo: mockActivatedRoute,
      });
    });
  });
});
