import { FormBuilder } from "@angular/forms";

import { of } from "rxjs";
import { MockReturnValues } from "./mock-return-values";

import { VocabListFormComponentMocks } from "./vocab-list-form-mocks";

export function contructMocks(): VocabListFormComponentMocks {
  return {
    router: jasmine.createSpyObj("mockRouter", ["navigate"]),
    listService: jasmine.createSpyObj("mockListService", ["add"]),
    listFormBuilder: jasmine.createSpyObj("mockListFormBuilder", ["build"]),
    listItemFormBuilder: jasmine.createSpyObj("mockListItemFormBuilder", ["build"]),
    observableBuilderForMocks: jasmine.createSpyObj("mockObservableBuilderForMocks", ["build"]),
    observableBuilderForReal: jasmine.createSpyObj("mockObservableBuilderForReal", ["build"]),
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
        length: 5,
        push: function () { },
        controls: [
          fb.group('control 1'),
          fb.group('control 2'),
          fb.group('control 3'),
          fb.group('control 4'),
        ],
      },
    },
    value: "Mock form value",
  };
}

export function constructMockReturnValues(mocks: VocabListFormComponentMocks, mockListForm: any): MockReturnValues {
  const mockReturnValues = {
    newListId$: of("Mock list ID"),
    listForm: mockListForm,
    title$: of("Test title")
  };

  mocks.listFormBuilder.build.and.returnValue(mockReturnValues.listForm);
  mocks.listService.add.and.returnValue(mockReturnValues.newListId$);
  mocks.observableBuilderForReal.build.and.returnValue(mockReturnValues.title$);

  return mockReturnValues;
}
