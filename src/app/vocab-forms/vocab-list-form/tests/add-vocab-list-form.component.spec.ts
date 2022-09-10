import { fakeAsync, waitForAsync } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { Observable, of, Subscription } from "rxjs";

import { VocabRoutePath } from "../../../vocab/vocab-routing.module";
import { VocabListFormBuilder, VocabListItemFormBuilder } from "../../services";
import { AddVocabListFormComponent } from "../add-vocab-list-form.component";
import { contructMocks, mockReturnValues, newConstructMockListForm, VocabListFormComponentMockReturns, VocabListFormComponentMocks } from "./vocab-list-form.spec.utilities";

fdescribe("AddVocabListComponent", () => {
  let mocks: VocabListFormComponentMocks;
  let returnValues: VocabListFormComponentMockReturns;
  let newMockListForm: any;
  let newMockObservableBuilderForMocks: any
  let newMockObservableBuilderForReal: any
  let newComponentWithMockBuilders: AddVocabListFormComponent;
  let newComponentWithRealBuilders: AddVocabListFormComponent;


  let componentWithRealBuilders: AddVocabListFormComponent;
  let componentWithMockBuilders: AddVocabListFormComponent;
  let mockRouter: any;
  let mockListService: any;
  let mockListForm: any;
  let mockListFormBuilder: any;
  let mockListItemFormBuilder: any
  let mockObservableBuilderForMocks: any
  let mockObservableBuilderForReal: any
  const  fb = new FormBuilder();

  const mockFormValue: string = "Mock form value";
  let groupOne: any;
  let groupTwo: any;
  let groupThree: any;
  let groupFour: any;
  let addList$: Observable<string> = of("Mock list ID")

  beforeEach(() => {
    mocks = contructMocks();
    newMockListForm = newConstructMockListForm(fb);
    returnValues = mockReturnValues(mocks, newMockListForm);

    newComponentWithMockBuilders = new AddVocabListFormComponent(mocks.router,
      mocks.listService, mocks.listFormBuilder, mocks.listItemFormBuilder,
      mocks.observableBuilderForMocks);

    const listItemFormBuilder = new VocabListItemFormBuilder(fb);
    const listFormBuilder = new VocabListFormBuilder(fb, listItemFormBuilder);
    newComponentWithRealBuilders = new AddVocabListFormComponent(mocks.router,
      mocks.listService, listFormBuilder, listItemFormBuilder,
      mocks.observableBuilderForReal);

    newComponentWithMockBuilders.ngOnInit();
    newComponentWithRealBuilders.ngOnInit();

    componentWithMockBuilders = constructComponentWithMockBuilders();
    componentWithRealBuilders = constructCompenentWithRealBuilders(fb);

    mockListForm = constructMockListForm();

    mockListFormBuilder.build.and.returnValue(mockListForm);
    mockListService.add.and.returnValue(addList$);
    mockObservableBuilderForReal.build.and.returnValue(of("Test title"));

    componentWithRealBuilders.ngOnInit();
  });

  describe("ngOnInit", () => {
    it("Should build the vocab list form", () => {
      expect(mocks.listFormBuilder.build).toHaveBeenCalledOnceWith();
    });

    it("Should call title observable builder with correct arguments.", () => {
      expect(mocks.observableBuilderForMocks.build)
        .toHaveBeenCalledOnceWith("New vocab list", newMockListForm.controls.name);
    });
  });

  describe("descriptionLength$", () => {
    it("Should emit if length is greater than the specified value", fakeAsync(() => {
      let hasEmited: boolean = false;
      newComponentWithRealBuilders.descriptionLength$
        .subscribe((length: number) => hasEmited = true);
      const descriptionControl = newComponentWithRealBuilders.vocabListForm.controls.description;

      const longString: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      descriptionControl.setValue(longString);

      expect(hasEmited).toBeTrue();
    }));

    it("Should not emit if length is smaller than or equal to the specified value", fakeAsync(() => {
      let hasEmited: boolean = false;
      newComponentWithRealBuilders.ngOnInit();
      newComponentWithRealBuilders.descriptionLength$
        .subscribe((length: number) => hasEmited = true);

      newComponentWithRealBuilders.vocabListForm.controls.description.setValue("Hello");

      expect(hasEmited).toBeFalse();
    }));
  });

  describe("addListItemControl", () => {
    it("Should generate a new list item form.", () => {
      newComponentWithMockBuilders.addListItemControl();
      expect(mocks.listItemFormBuilder.build).toHaveBeenCalledOnceWith();
    });

    it("Should set the list item control count subject value to the list form's value.", () => {
      newComponentWithRealBuilders.addListItemControl();
      newComponentWithRealBuilders.addListItemControl();
      expect(newComponentWithRealBuilders.listItemControlCount$.value).toBe(2);
    });
  });

  describe("removeListItemControl", () => {
    it("Should throw exception if invalid index is provided.", () => {
      expect(function () { newComponentWithMockBuilders.removeListItemControl(-1) }).toThrowError("Index may not be negative.");
    });

    it("Should not throw exception if index is valid.", () => {
      expect(function () { newComponentWithMockBuilders.removeListItemControl(0) }).not.toThrow();
      expect(function () { newComponentWithMockBuilders.removeListItemControl(1) }).not.toThrow();
    });

    it("Should throw exception if index provided is greater than the list items control length.", () => {
      expect(function () { newComponentWithMockBuilders.removeListItemControl(5) }).toThrowError("Index exceeds the size of the list items form control array.");
      expect(function () { newComponentWithMockBuilders.removeListItemControl(6) }).toThrowError("Index exceeds the size of the list items form control array.");
    });

    it("Should remove a list item form.", () => {
      newComponentWithRealBuilders.addListItemControl();
      newComponentWithRealBuilders.addListItemControl();
      newComponentWithRealBuilders.addListItemControl();

      const listItemsControl = newComponentWithRealBuilders.vocabListForm.controls.listItems;
      expect(listItemsControl.controls.length).toEqual(3);

      newComponentWithRealBuilders.removeListItemControl(1);
      expect(listItemsControl.controls.length).toEqual(2);
    });

    it("Should remove a list item form at the correct index.", () => {
      const listItemsControl = newComponentWithMockBuilders.vocabListForm.controls.listItems;
      const controls = listItemsControl.controls;
      const expected: any = [controls[0], controls[2], controls[3]];

      newComponentWithMockBuilders.removeListItemControl(1);
      expect(listItemsControl.controls).toEqual(expected);
    });
  });

  describe("submit", () => {
    it("Should call the add method on the vocab list service with the correct argument.", () => {
      newComponentWithMockBuilders.submit();
      expect(mocks.listService.add).toHaveBeenCalledOnceWith(newMockListForm.value!);
    });

    it("Should call Router.navigate with the correct arguments.", fakeAsync(() => {
      newComponentWithMockBuilders.submit();
      expect(mocks.router.navigate).toHaveBeenCalledOnceWith([`/${VocabRoutePath.Root}`, VocabRoutePath.VocabLists]);
    }));
  });

  describe("ngOnDestroy", () => {
    it("Should unsubscribe from VocabListService.add subscription.", fakeAsync(() => {
      const mockSubscription = new Subscription();
      spyOn(returnValues.newListId$, "subscribe").and.callFake((): Subscription => {
        return mockSubscription;
      });
      spyOn(mockSubscription, "unsubscribe").and.callThrough();
      newComponentWithMockBuilders.submit();

      newComponentWithMockBuilders.ngOnDestroy();

      expect(mockSubscription.unsubscribe).toHaveBeenCalledOnceWith()
    }));
  });

  function constructComponentWithMockBuilders(): AddVocabListFormComponent {
    mockRouter = jasmine.createSpyObj("mockRouter", ["navigate"]);
    mockListService = jasmine.createSpyObj("mockListService", ["add"]);
    mockListFormBuilder = jasmine.createSpyObj("mockListFormBuilder", ["build"]);
    mockListItemFormBuilder = jasmine.createSpyObj("mockListItemFormBuilder", ["build"]);
    mockObservableBuilderForMocks = jasmine.createSpyObj("mockObservableBuilderForMocks", ["build"]);
    mockObservableBuilderForReal = jasmine.createSpyObj("mockObservableBuilderForReal", ["build"]);

    return new AddVocabListFormComponent(mockRouter, mockListService,
      mockListFormBuilder, mockListItemFormBuilder, mockObservableBuilderForMocks);
  }

  function constructCompenentWithRealBuilders(fb: FormBuilder): AddVocabListFormComponent {
    const listItemFormBuilder = new VocabListItemFormBuilder(fb);
    const listFormBuilder = new VocabListFormBuilder(fb, listItemFormBuilder);
    return new AddVocabListFormComponent(mockRouter, mockListService,
      listFormBuilder, listItemFormBuilder, mockObservableBuilderForReal);
  }

  function constructMockListForm(): any {
    groupOne = fb.group('control 1');
    groupTwo = fb.group('control 2');
    groupThree = fb.group('control 3');
    groupFour = fb.group('control 4');
    return {
      controls: {
        name: {
          valueChanges: of("List name"),
        },
        description: {
          valueChanges: of("List description"),
        },
        listItems: {
          length: 5,
          push: function () { },
          controls: [groupOne, groupTwo, groupThree, groupFour],
        },
      },
      value: mockFormValue,
    };
  }
});
