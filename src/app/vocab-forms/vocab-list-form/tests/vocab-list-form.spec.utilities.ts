import { FormBuilder } from "@angular/forms";

import { Observable, of } from "rxjs";
import { VocabList } from "../../../vocab/models";

export interface VocabListFormComponentMocks {
  router: any;
  listService: any;
  listFormBuilder: any;
  listItemFormBuilder: any;
  observableBuilderForMocks: any;
  observableBuilderForReal: any;
  list?: VocabList;
  route?: any;
}

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

export interface MockVocabListForm {
  controls: {
    name: { valueChanges: Observable<any> };
    description: { valueChanges: Observable<any> };
    listItems: {
      length: number;
      push: () => void;
      controls: any[];
    },
    value: any
  }
}

export function newConstructMockListForm(fb: FormBuilder): any {
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

export interface VocabListFormComponentMockReturns {
  newListId$: Observable<string>,
  listForm: any,
  title$: Observable<string>
}

export function mockReturnValues(mocks: VocabListFormComponentMocks, mockListForm: any): VocabListFormComponentMockReturns {
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
