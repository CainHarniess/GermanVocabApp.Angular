import { FormBuilder, FormGroup } from "@angular/forms";
import { VocabListFormValidationProvider } from "..";
import { StubVocabListBuilder } from "../../../../testing/stub-vocab-list-builder";
import { StubVocabListItemBuilder } from "../../../../testing/stub-vocab-list-item-builder";
import { VocabList, VocabListItem } from "../../../vocab/models";
import { VocabListForm } from "../../models";
import { ListFormValidationProviderFactory } from "../../test-utilities";
import { VocabListFormBuilder } from "../vocab-list-form-builder.service";
import { VocabListItemFormBuilder } from "../vocab-list-item-form-builder.service";

describe("VocabListFormBuilder", () => {
  let mockFb: any;
  let mockListItemFb: any;
  let mockValidationProvider: any;
  let builder: VocabListFormBuilder;

  beforeEach(() => {
    mockFb = jasmine.createSpyObj("mockFormBuilder", ["group", "control", "array"]);
    mockListItemFb = jasmine.createSpyObj("mockListItemFormBuilder", ["buildFromModel"]);
    mockValidationProvider = jasmine.createSpyObj("mockValidationProvider", ["provide"]);
    builder = new VocabListFormBuilder(mockFb, mockListItemFb, mockValidationProvider);
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
  });

  describe("buildFromList", () => {
    const mockName: string = "mockVocabList";
    const mockDescription: string = "This vocab list has been mocked.";
    let stubList: VocabList;
    let form: FormGroup<VocabListForm>;
    let controls: VocabListForm;

    beforeEach(() => {
      stubList = StubVocabListBuilder.stub()
        .withName(mockName)
        .withDescription(mockDescription)
        .build();
      const fb = new FormBuilder();
      const validationProvider: VocabListFormValidationProvider = new ListFormValidationProviderFactory()
        .create();
      spyOn(validationProvider, "provide").and.callFake((formArg: FormGroup<VocabListForm>) => formArg);

      builder = new VocabListFormBuilder(fb, new VocabListItemFormBuilder(fb), validationProvider);
      form = builder.buildFromModel(stubList);
      controls = form.controls;
    });

    it("Should create FormGroup with the correct name.", () => {
      expect(controls.name.value).toBe(mockName);
    });

    it("Should create FormGroup with the correct description.", () => {
      expect(controls.description.value).toBe(mockDescription);
    });

    it("Should create empty list items form array when no list items are present.", () => {
      expect(controls.listItems).toBeTruthy();
      expect(controls.listItems.length).toBe(0);
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
      controls = form.controls;

      expect(controls.listItems.length).toBe(2);
      expect(controls.listItems.value[0].english).toBe(stubEnglishOne);
      expect(controls.listItems.value[1].english).toBe(stubEnglishTwo);
    });
  });
});
