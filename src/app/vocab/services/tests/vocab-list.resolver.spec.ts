//import { EMPTY } from "rxjs";
//import { VocabListResolver } from "../vocab-list.resolver";

//describe(VocabListResolver.name, () => {
//  let resolver: VocabListResolver;
//  let mockVocabListService: any;
//  let mockParamMap: any;
//  let mockRoute: any
//  let mockState: any

//  describe("resolve()", () => {

//    const dummyVocabListId: string = "testId";

//    beforeEach(() => {
//      mockParamMap = jasmine.createSpyObj(["get"]);
//      mockParamMap.get.and.returnValue(dummyVocabListId);

//      mockRoute = jasmine.createSpyObj("mockRoute", {}, { paramMap: mockParamMap });

//      mockState = jasmine.createSpy("mockState");

//      mockVocabListService = jasmine.createSpyObj("mockVocabListService", ["getWithId"])
//      mockVocabListService.getWithId.and.returnValue(EMPTY);

//      resolver = new VocabListResolver(mockVocabListService)
//    });

//    it("Should query map map with key value of 'id'.", () => {
//      resolver.resolve(mockRoute, mockState);
//      expect(mockVocabListService.getWithId).toHaveBeenCalled();
//    });

//    it("Should call VocabListService.getWithId.", () => {
//      resolver.resolve(mockRoute, mockState);
//      expect(mockParamMap.get).toHaveBeenCalledWith("id");
//    });

//    it("Should call VocabListService.getWithId() with correct value.", () => {
//      resolver.resolve(mockRoute, mockState);
//      expect(mockVocabListService.getWithId).toHaveBeenCalledWith(dummyVocabListId);
//    });
//  });
//});
