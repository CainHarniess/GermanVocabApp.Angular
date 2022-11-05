import { FormBuilder, FormGroup } from "@angular/forms";
import { StubVocabListBuilder } from "../../../../testing/stub-vocab-list-builder";
import { StubVocabListItemBuilder } from "../../../../testing/stub-vocab-list-item-builder";
import { VocabList, VocabListItem } from "../../../vocab/models";
import { VocabListForm } from "../../models";
import { VocabListFormBuilder } from "../vocab-list-form-builder.service";
import { VocabListItemFormBuilder } from "../vocab-list-item-form-builder.service";
import { createMockItemValidationProvider } from "./testing.utilities";

describe("VocabListFormBuilder", () => {
  let mockFb: any;
  let mockItemFb: any;
  let mockListValidationProvider: any;
  let mockItemValidationProvider: any;
  let builder: VocabListFormBuilder;

  beforeEach(() => {
    mockFb = jasmine.createSpyObj("mockFormBuilder", ["group", "control", "array"]);
    mockItemFb = jasmine.createSpyObj("mockItemFormBuilder", ["buildFromModel"]);
    mockListValidationProvider = jasmine.createSpyObj("mockValidationProvider", ["provide"]);
    mockItemValidationProvider = createMockItemValidationProvider();
    builder = new VocabListFormBuilder(mockFb, mockItemFb, mockListValidationProvider);
  });

  describe("build", () => {
    it("Should call FormBuilder.group.", () => {
      builder.build();
      expect(mockFb.group).toHaveBeenCalled();
    });

    it("Should call FormBuilder.control with correct values.", () => {
      builder.build();
      expect(mockFb.control).toHaveBeenCalledTimes(2);
      expect(mockFb.control).toHaveBeenCalledWith(null);
    });

    it("Should call FormBuilder.array with correct values.", () => {
      builder.build();
      expect(mockFb.array).toHaveBeenCalledWith([]);
    });

    it("Should return the list with validation.", () => {
      builder.build();
      expect(mockListValidationProvider.provide).toHaveBeenCalledTimes(1);
    });
  });

  describe("buildFromList", () => {
    const mockName: string = "mockVocabList";
    const mockDescription: string = "This vocab list has been mocked.";
    let stubList: VocabList;
    let form: FormGroup<VocabListForm>;

    beforeEach(() => {
      stubList = StubVocabListBuilder.stub()
        .withName(mockName)
        .withDescription(mockDescription)
        .build();
      const fb = new FormBuilder();
      mockListValidationProvider.provide.and.callFake((form: FormGroup<VocabListForm>) => form);
      builder = new VocabListFormBuilder(fb, new VocabListItemFormBuilder(fb, mockItemValidationProvider), mockListValidationProvider);
    });

    it("Should create FormGroup with the correct name.", () => {
      form = builder.buildFromModel(stubList);
      expect(form.controls.name.value).toBe(mockName);
    });

    it("Should create FormGroup with the correct description.", () => {
      form = builder.buildFromModel(stubList);
      expect(form.controls.description.value).toBe(mockDescription);
    });

    it("Should create empty list items form array when no list items are present.", () => {
      form = builder.buildFromModel(stubList);
      expect(form.controls.listItems).toBeTruthy();
      expect(form.controls.listItems.length).toBe(0);
    });

    it("Should create FormArray with multiple vocab list item.", () => {
      const stubEnglishOne: string = "testStubOne";
      const stubEnglishTwo: string = "testStubTwo";
      const nameValues: string[] = [stubEnglishOne, stubEnglishTwo];

      const stubListItems: VocabListItem[] = [] as VocabListItem[];
      for (let i: number = 0; i < 2; i++) {
        stubListItems.push(StubVocabListItemBuilder.stub().withEnglish(nameValues[i])
          .build());
      }
      stubList.listItems = stubListItems;

      form = builder.buildFromModel(stubList);

      expect(form.controls.listItems.length).toBe(2);
      expect(form.controls.listItems.value[0].english).toBe(stubEnglishOne);
      expect(form.controls.listItems.value[1].english).toBe(stubEnglishTwo);
    });

    it("Should return the list with validation.", () => {
      form = builder.buildFromModel(stubList);
      expect(mockListValidationProvider.provide).toHaveBeenCalledTimes(1);
    });
  });
});
