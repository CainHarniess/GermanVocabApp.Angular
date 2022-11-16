import { of } from "rxjs";
import { HttpVocabService } from "..";
import { StubVocabListBuilder } from "../../../../testing";
import { VocabList } from "../../models/vocab-list.interface";

// TODO: Update to use Angular HTTP testing framework https://angular.io/guide/http#testing-http-requests
describe(HttpVocabService.name, () => {
  const expectedUrlRoot: string = "/api/vocab-lists";
  const testId: string = "3b41900b-5df8-4589-b157-fb1c2df8d31e";
  const mockVocabList: VocabList = StubVocabListBuilder.stub().build();
  const mockErrorHandler: any = {
    handle: (e: any) => "Mock Error Message",
  };

  let service: HttpVocabService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj("mockHttpClient", ["get", "post"]);
    mockHttpClient.get.and.returnValue(of([]));
    mockHttpClient.post.and.returnValue(of("Mock"));

    service = new HttpVocabService(mockHttpClient,
      mockErrorHandler);
  });

  describe("get", () => {
    it("Should call http.get with the correct value.", () => {
      service.get();
      expect(mockHttpClient.get).toHaveBeenCalledOnceWith(expectedUrlRoot);
    });
  });

  describe("getWithId", () => {
    it("Should call http.get with the correct value.", () => {
      service.getWithId(testId);
      expect(mockHttpClient.get)
        .toHaveBeenCalledOnceWith(`${expectedUrlRoot}/${testId}`);
    });
  });

  describe("add", () => {
    it("Should call http.get with the correct value.", () => {
      service.add(mockVocabList);
      expect(mockHttpClient.post)
        .toHaveBeenCalledOnceWith(expectedUrlRoot, mockVocabList);
    });
  });

  describe("add", () => {
    it("Should call http.post with the correct value.", () => {
      const mockListItem: any = {};
      service.addListItem(mockListItem, testId);
      expect(mockHttpClient.post)
        .toHaveBeenCalledOnceWith(expectedUrlRoot + `/${testId}`, mockListItem);
    });
  });
});
