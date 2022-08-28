import { VocabListsResolver } from "../vocab-lists.resolver";

describe("VocabListsResolver", () => {
  let resolver: VocabListsResolver;
  let mockVocabListService: any;
  let mockActivatedRouteSnapshot: any;
  let mockRouterStateSnapshot: any;

  beforeEach(() => {
    mockVocabListService = jasmine.createSpyObj("mockVocabListService", ["get"]);
    mockActivatedRouteSnapshot = jasmine.createSpy("mockActivatedRoute");
    mockRouterStateSnapshot = jasmine.createSpy("mockRouterStateSnapshot");
    resolver = new VocabListsResolver(mockVocabListService);
  });

  describe("resolve", () => {
    it("Should call VocabListService.get", () => {
      resolver.resolve(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      expect(mockVocabListService.get).toHaveBeenCalledOnceWith();
    });
  });
});
