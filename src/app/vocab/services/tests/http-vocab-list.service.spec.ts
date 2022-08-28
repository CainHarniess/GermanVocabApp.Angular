import { VocabList } from "../../models/vocab-list.interface";
import { HttpVocabListService } from "..";

describe("HttpVocabListService", () => {
  const expectedUrlRoot: string = "/api/vocab-lists";
  const testId: string = "3b41900b-5df8-4589-b157-fb1c2df8d31e";
  const mockVocabList: VocabList = {
      name: "Test List",
      listItems: [],
      authorName: "Testy McTestface"
  };

  let service: HttpVocabListService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj("mockHttpClient", ["get", "post"]);
    service = new HttpVocabListService(mockHttpClient);
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
});
