import { FormBuilder, FormGroup } from "@angular/forms";

import { of } from "rxjs";
import { StubVocabListBuilder } from "../../../../testing/stub-vocab-list-builder";
import { VocabListForm } from "../../models";
import { VocabListFormBuilder, VocabListFormValidationProvider, VocabListItemFormBuilder } from "../../services";
import { ListFormValidationProviderFactory } from "../../test-utilities";
import { MockReturnValues } from "./mock-return-values";

import { VocabListFormComponentMocks } from "./vocab-list-form-mocks";

export function contructMocks(): VocabListFormComponentMocks {
  const validationProvider: VocabListFormValidationProvider = new ListFormValidationProviderFactory().create();
  spyOn(validationProvider, "provide").and.callFake((formArg: FormGroup<VocabListForm>) => formArg);

  const itemFormBuilder: VocabListItemFormBuilder = jasmine.createSpyObj("mockListItemFormBuilder", ["build", "buildFromFormGroup"]);
  const listFormBuilder: VocabListFormBuilder = new VocabListFormBuilder(new FormBuilder(), itemFormBuilder, validationProvider);

  return {
    router: jasmine.createSpyObj("mockRouter", ["navigate"]),
    vocabService: jasmine.createSpyObj("mockListService", ["add", "update"]),
    listFormBuilder: listFormBuilder,
    itemFormBuilder: itemFormBuilder,
    observableBuilderForMocks: jasmine.createSpyObj("mockObservableBuilderForMocks", ["build"]),
    observableBuilderForReal: jasmine.createSpyObj("mockObservableBuilderForReal", ["build"]),
    validationProvider: validationProvider,
  };
}

export function constructMockListForm(fb: FormBuilder): any {
  return {
    patchValue: function () { },
    controls: {
      name: {
        value: "Current value",
        valueChanges: of("Changed value"),
      },
      description: {
        valueChanges: of("List description"),
      },
      listItems: {
        push: function () { },
        removeAt: function () { },
        at: function (index: number): any { },
        insert: function (index: number, control: any): void { },
        length: 5,
        controls: [
          fb.group('control 1'),
          fb.group('control 2'),
          fb.group('control 3'),
          fb.group('control 4'),
        ],
      },
    },
    value: StubVocabListBuilder.stub().build(),
  };
}

export function constructMockReturnValues(mocks: VocabListFormComponentMocks, mockListForm: any): MockReturnValues {
  const mockReturnValues = {
    newListId$: of("Mock list ID"),
    listForm: mockListForm,
    title$: of("Test title"),
    updatedList$: of("Mock updated vocab list")
  };

  spyOn(mocks.listFormBuilder, "build").and.callFake(() => mockReturnValues.listForm);
  mocks.vocabService.add.and.returnValue(mockReturnValues.newListId$);
  mocks.vocabService.update.and.returnValue(mockReturnValues.updatedList$);
  mocks.observableBuilderForReal.build.and.returnValue(mockReturnValues.title$);

  return mockReturnValues;
}
