import { waitForAsync } from "@angular/core/testing";
import { of } from "rxjs";
import { StubVocabListBuilder } from "../../../testing";
import { ResolvedData } from "../models/data";
import { VocabList } from "../models/vocab-list.interface";
import { VocabListComponent } from "./vocab-list.component";

describe(`${VocabListComponent.name}`, () => {
  const mockVocabList: VocabList = StubVocabListBuilder.stub().build();
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
