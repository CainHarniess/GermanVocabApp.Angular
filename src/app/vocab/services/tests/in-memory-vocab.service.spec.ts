import { waitForAsync } from "@angular/core/testing";
import { Observable } from "rxjs";
import { InMemoryVocabService } from "..";
import { createMockNotificationService } from "../../../../core/test-utilities";
import { StubVocabListBuilder } from "../../../../testing/stub-vocab-list-builder";
import { createStubListItem } from "../../../../utilities/testing.utilities";
import { VocabListItem } from "../../models";
import { WordType } from "../../models/data";
import { VocabList } from "../../models/vocab-list.interface";
import { InMemoryDataProvider } from "../in-memory-data-seeder.service";

// TODO: Update tests to cover new observable approach.

describe(InMemoryVocabService.name, () => {
  const mockListGuid: string = "9244e805-f3ea-4cad-9201-d38110c9b4fe"
  const invalidListId: string = "2333a7b8-e2d1-434a-9195-87abe3dde29e";
  let mockVocabList: VocabList;
  let mockNotificationService: any;

  let service: InMemoryVocabService;
  let mockGuidGenerator: any

  beforeEach(() => {
    mockGuidGenerator = jasmine.createSpyObj("mockGuidGenerator", ["generate"]);
    mockGuidGenerator.generate.and.returnValue(mockListGuid);
    mockVocabList = {
      name: "Test List",
      listItems: [],
      authorName: "Testy McTestface"
    };
    mockNotificationService = createMockNotificationService();
    service = new InMemoryVocabService(mockGuidGenerator, mockNotificationService,
      new InMemoryDataProvider());
  });

  describe("getWithId", () => {
    xit("Should throw an error with the correct message if the ID is not found.", () => {
      service = createServiceWithMockData();

      expect(function () { service.getWithId(invalidListId) })
        .toThrowError(`Vocab list with ID ${invalidListId} not found in in-memory array.`)
    });

    it("Should not throw an error the ID is found.", () => {
      const realId: string = service.lists[0].id!;
      expect(function () { service.getWithId(realId) })
        .not.toThrowError();
    });
  });

  describe("add", () => {
    xit("Should call the guid generator service once when there are no list items in the list.", () => {
      service.add(mockVocabList);
      expect(mockGuidGenerator.generate).toHaveBeenCalledOnceWith();
    });

    xit("Should increase the number of vocab lists by one.", () => {
      expect(service.lists.length).toEqual(1);
      service.add(mockVocabList);
      expect(service.lists.length).toEqual(2);
    });

    xit("Should add the new list to the seed data.", () => {
      service.add(mockVocabList);
      expect(service.lists).toContain(mockVocabList);
    });

    xit("Should call the guid generator service.", () => {

      service.add(mockVocabList);
      expect(mockVocabList.id).toEqual(mockListGuid);
    });

    xit("Should call the guid generator for the list and each list item.", () => {
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

  describe("addListItem", () => {
    let stubListItem: VocabListItem;
    let mockListItemId: string = "a71da95c-5b9f-43ea-acd7-35d1f9fcce29";

    beforeEach(() => {
      stubListItem = createStubListItem();
    });

    it("Should throw an error with the correct message"
      + "if the list item already has an ID value.", () => {
      stubListItem.id = mockListItemId;

      expect(function () { service.addListItem(stubListItem, mockListGuid) })
        .toThrowError(`Item already has ID ${stubListItem.id}.`)
    });

    it("Should throw an error with the correct message"
      + "if the list item already has a vocab list ID value.", () => {
      stubListItem.vocabListId = mockListGuid;

      expect(function () { service.addListItem(stubListItem, mockListGuid) })
        .toThrowError(`Item already belongs to list with ID ${mockListGuid}.`)
    });

    xit("Should throw an error with the correct message if the vocab list ID is not found.", () => {
      service = createServiceWithMockData();

      expect(function () { service.addListItem(stubListItem, invalidListId) })
        .toThrowError(`Vocab list with ID ${invalidListId} not found in in-memory array.`)
    });

    it("Should generate an ID for the list item.", () => {
      const mockListItemGuid: string = "ea5486b9-d315-4f69-92b1-06d26034b8b9";
      mockGuidGenerator.generate.and.returnValue(mockListItemGuid);
      service = createServiceWithMockData()

      service.addListItem(stubListItem, mockListGuid);
      expect(stubListItem.id).toBe(mockListItemGuid);
    });

    it("Should return the generated list item ID.", waitForAsync(() => {
      const mockListItemGuid: string = "ea5486b9-d315-4f69-92b1-06d26034b8b9";
      mockGuidGenerator.generate.and.returnValue(mockListItemGuid);
      service = createServiceWithMockData()

      const listItemId$: Observable<string> = service.addListItem(stubListItem, mockListGuid);
      listItemId$.subscribe((id: string) => {
        expect(id).toBe(mockListItemGuid);
      });
    }));
  });

  // TODO: Add update tests.

  function createServiceWithMockData(): InMemoryVocabService {
    const mockDataSeeder: any = jasmine.createSpyObj("mockDataSeeder", ["seed"]);
    const listStub: VocabList = StubVocabListBuilder.stub().withId(mockListGuid).build();
    const mockSeedData: VocabList[] = [listStub];
    mockDataSeeder.seed.and.returnValue(mockSeedData);
    return new InMemoryVocabService(mockGuidGenerator, createMockNotificationService(),
      createMockAuthenticationService(), mockDataSeeder);
  }
});
