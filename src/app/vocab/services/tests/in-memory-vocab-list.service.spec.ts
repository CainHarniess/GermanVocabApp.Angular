import { InMemoryVocabListService } from "..";
import { GuidGeneratorService } from "../../../shared/services/guid-generator.service";
import { WordType } from "../../models/data";
import { VocabList } from "../../models/vocab-list.interface";

describe("InMemoryVocabListService", () => {
  const mockGuid: string = "9244e805-f3ea-4cad-9201-d38110c9b4fe"
  const invalidId: string = "2333a7b8-e2d1-434a-9195-87abe3dde29e";
  let mockVocabList: VocabList;

  let service: InMemoryVocabListService;
  let mockGuidGenerator: any

  beforeEach(() => {
    mockGuidGenerator = jasmine.createSpyObj("mockGuidGenerator", ["generate"]);
    mockGuidGenerator.generate.and.returnValue(mockGuid);
    mockVocabList = {
      name: "Test List",
      listItems: [],
      authorName: "Testy McTestface"
    };
    service = new InMemoryVocabListService(mockGuidGenerator);
  });

  describe("getWithId", () => {
    it("Should throw an error with the correct message if the ID is not found.", () => {
      expect(function () { service.getWithId(invalidId) })
        .toThrowError(`Vocab with ID ${invalidId} not found in in-memory array.`)
    });
  });

  describe("add", () => {
    it("Should call the guid generator service once when there are no list items in the list.", () => {
      service.add(mockVocabList);
      expect(mockGuidGenerator.generate).toHaveBeenCalledOnceWith();
    });

    it("Should increase the number of vocab lists by one.", () => {
      expect(service.seedData.length).toEqual(1);
      service.add(mockVocabList);
      expect(service.seedData.length).toEqual(2);
    });

    it("Should add the new list to the seed data.", () => {
      service.add(mockVocabList);
      expect(service.seedData).toContain(mockVocabList);
    });

    it("Should call the guid generator service.", () => {

      service.add(mockVocabList);
      expect(mockVocabList.id).toEqual(mockGuid);
    });

    it("Should call the guid generator for the list and each list item.", () => {
      mockVocabList = {
        name: "Test List",
        listItems: [
          { wordType: WordType.Noun, german: "x", english: "y" },
          { wordType: WordType.Noun, german: "x", english: "y" },
          { wordType: WordType.Noun, german: "x", english: "y" },
        ],
        authorName: "Testy McTestface"
      };

      service.add(mockVocabList);
      expect(mockGuidGenerator.generate)
        .toHaveBeenCalledTimes(mockVocabList.listItems.length + 1);
    });
  });
});
