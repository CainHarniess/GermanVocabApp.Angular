import { Observable } from "rxjs";
import { GuidGeneratorService } from "../../shared/services/guid-generator.service";
import { VocabList } from "../models/vocab-list.interface";
import { InMemoryVocabListService } from "../services/in-memory-vocab-list.service";
import { VocabListsComponent } from "./vocab-lists.component";

xdescribe("VocabListsComponent", () => {
  let component: VocabListsComponent;
  let mockActivatedRoute: any;

  beforeEach(() => {
    const vocabListService = new InMemoryVocabListService(new GuidGeneratorService());
    const mockData: Observable<VocabList[]> = vocabListService.get();
    mockActivatedRoute = jasmine.createSpyObj("mockActivatedRoute", [], {data: mockData});
  });

  it("Should pass activated route data to the vocabLists$ proprety", () => {
    component = new VocabListsComponent(mockActivatedRoute);
    component.vocabLists$.subscribe((result: VocabList[]) => {
      expect(result).toBe(jasmine.arrayContaining('83d1b66e-d2e9-9db8-d1f1-3f9027dd5aed'));
    })
  });
});
