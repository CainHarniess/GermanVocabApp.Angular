import { FormBuilder } from "@angular/forms";

import { Observable, of } from "rxjs";
import { VocabList } from "../../../vocab/models";

import { VocabListFormBuilder, VocabListItemFormBuilder } from "../../services";
import { AddVocabListFormComponent } from "../add-vocab-list-form.component";

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

//describe("AddVocabListComponent", () => {
//  let componentWithRealBuilders: AddVocabListFormComponent;
//  let componentWithMockBuilders: AddVocabListFormComponent;
//  let mockRouter: any;
//  let mockListService: any;
//  let mockListForm: any;
//  let mockListFormBuilder: any;
//  let mockListItemFormBuilder: any
//  let mockObservableBuilderForMocks: any
//  let mockObservableBuilderForReal: any
//  const  fb = new FormBuilder();

//  const mockFormValue: string = "Mock form value";
//  let groupOne: any;
//  let groupTwo: any;
//  let groupThree: any;
//  let groupFour: any;
//  let addList$: Observable<string> = of("Mock list ID")

//  function constructComponentWithMockBuilders(): AddVocabListFormComponent {
//    mockRouter = jasmine.createSpyObj("mockRouter", ["navigate"]);
//    mockListService = jasmine.createSpyObj("mockListService", ["add"]);
//    mockListFormBuilder = jasmine.createSpyObj("mockListFormBuilder", ["build"]);
//    mockListItemFormBuilder = jasmine.createSpyObj("mockListItemFormBuilder", ["build"]);
//    mockObservableBuilderForMocks = jasmine.createSpyObj("mockObservableBuilderForMocks", ["build"]);
//    mockObservableBuilderForReal = jasmine.createSpyObj("mockObservableBuilderForReal", ["build"]);

//    return new AddVocabListFormComponent(mockRouter, mockListService,
//      mockListFormBuilder, mockListItemFormBuilder, mockObservableBuilderForMocks);
//  }

//  function constructCompenentWithRealBuilders(fb: FormBuilder): AddVocabListFormComponent {
//    const listItemFormBuilder = new VocabListItemFormBuilder(fb);
//    const listFormBuilder = new VocabListFormBuilder(fb, listItemFormBuilder);
//    return new AddVocabListFormComponent(mockRouter, mockListService,
//      listFormBuilder, listItemFormBuilder, mockObservableBuilderForReal);
//  }

//  function constructMockListForm(): any {
//    groupOne = fb.group('control 1');
//    groupTwo = fb.group('control 2');
//    groupThree = fb.group('control 3');
//    groupFour = fb.group('control 4');
//    return {
//      controls: {
//        name: {
//          valueChanges: of("List name"),
//        },
//        description: {
//          valueChanges: of("List description"),
//        },
//        listItems: {
//          length: 5,
//          push: function () { },
//          controls: [groupOne, groupTwo, groupThree, groupFour],
//        },
//      },
//      value: mockFormValue,
//    };
//  }
//});

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

export function mockReturnValues(mocks: VocabListFormComponentMocks, mockListForm: any): void {
  let addList$: Observable<string> = of("Mock list ID")
  mocks.listFormBuilder.build.and.returnValue(mockListForm);
  mocks.listService.add.and.returnValue(addList$);
  mocks.observableBuilderForReal.build.and.returnValue(of("Test title"));
}
