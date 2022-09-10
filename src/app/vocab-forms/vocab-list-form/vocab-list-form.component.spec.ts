import { fakeAsync, waitForAsync } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { Observable, of, Subscription } from "rxjs";

import { VocabRoutePath } from "../../vocab/vocab-routing.module";
import { VocabListFormBuilder, VocabListItemFormBuilder } from "../services";
import { VocabListFormComponent } from "./vocab-list-form.component";

describe("AddVocabListComponent", () => {
  let componentWithRealBuilders: VocabListFormComponent;
  let componentWithMockBuilders: VocabListFormComponent;
  let mockRouter: any;
  let mockListService: any;
  let mockListFormBuilder: any;
  let mockListItemFormBuilder: any
  const  fb = new FormBuilder();

  const mockFormValue: string = "Mock form value";
  let groupOne: any;
  let groupTwo: any;
  let groupThree: any;
  let groupFour: any;
  let addList$: Observable<string> = of("Mock list ID")

  beforeEach(() => {
    componentWithMockBuilders = constructComponentWithMockBuilders();
    componentWithRealBuilders = constructCompenentWithRealBuilders(fb);

    const mockListForm: any = constructMockListForm();

    mockListFormBuilder.build.and.returnValue(mockListForm);
    mockListService.add.and.returnValue(addList$);

    componentWithMockBuilders.ngOnInit();
    componentWithRealBuilders.ngOnInit();
  });

  describe("ngOnInit", () => {
    it("Should build the vocab list form", () => {
      expect(mockListFormBuilder.build).toHaveBeenCalledOnceWith();
    });
  });

  describe("listTitle$", () => {
    it("Should have correct initial title.", waitForAsync(() => {
      componentWithRealBuilders.listTitle$.subscribe((title: string) => {
        expect(title).toBe("New vocab list");
      });
    }));
  });

  describe("descriptionLength$", () => {
    it("Should emit if length is greater than the specified value", fakeAsync(() => {
      let hasEmited: boolean = false;
      componentWithRealBuilders.descriptionLength$
        .subscribe((length: number) => hasEmited = true);
      const descriptionControl = componentWithRealBuilders.vocabListForm.controls.description;

      const longString: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      descriptionControl.setValue(longString);

      expect(hasEmited).toBeTrue();
    }));

    it("Should not emit if length is smaller than or equal to the specified value", fakeAsync(() => {
      let hasEmited: boolean = false;
      componentWithRealBuilders.ngOnInit();
      componentWithRealBuilders.descriptionLength$
        .subscribe((length: number) => hasEmited = true);

      componentWithRealBuilders.vocabListForm.controls.description.setValue("Hello");

      expect(hasEmited).toBeFalse();
    }));
  });

  describe("addListItemControl", () => {
    it("Should generate a new list item form.", () => {
      componentWithMockBuilders.addListItemControl();
      expect(mockListItemFormBuilder.build).toHaveBeenCalledOnceWith();
    });

    it("Should set the list item control count subject value to the list form's value.", () => {
      componentWithRealBuilders.addListItemControl();
      componentWithRealBuilders.addListItemControl();
      expect(componentWithRealBuilders.listItemControlCount$.value).toBe(2);
    });
  });

  describe("removeListItemControl", () => {
    it("Should throw exception if invalid index is provided.", () => {
      expect(function () { componentWithMockBuilders.removeListItemControl(-1) }).toThrowError("Index may not be negative.");
    });

    it("Should not throw exception if index is valid.", () => {
      expect(function () { componentWithMockBuilders.removeListItemControl(0) }).not.toThrow();
      expect(function () { componentWithMockBuilders.removeListItemControl(1) }).not.toThrow();
    });

    it("Should throw exception if index provided is greater than the list items control length.", () => {
      expect(function () { componentWithMockBuilders.removeListItemControl(5) }).toThrowError("Index exceeds the size of the list items form control array.");
      expect(function () { componentWithMockBuilders.removeListItemControl(6) }).toThrowError("Index exceeds the size of the list items form control array.");
    });

    it("Should remove a list item form.", () => {
      componentWithRealBuilders.addListItemControl();
      componentWithRealBuilders.addListItemControl();
      componentWithRealBuilders.addListItemControl();

      const listItemsControl = componentWithRealBuilders.vocabListForm.controls.listItems;
      expect(listItemsControl.controls.length).toEqual(3);

      componentWithRealBuilders.removeListItemControl(1);
      expect(listItemsControl.controls.length).toEqual(2);
    });

    it("Should remove a list item form at the correct index.", () => {
      const listItemsControl = componentWithMockBuilders.vocabListForm.controls.listItems;
      componentWithMockBuilders.removeListItemControl(1);
      expect(listItemsControl.controls).toEqual([groupOne, groupThree, groupFour]);
    });
  });

  describe("submit", () => {
    it("Should call the add method on the vocab list service.", () => {
      componentWithMockBuilders.submit();
      expect(mockListService.add).toHaveBeenCalledOnceWith(mockFormValue)
    });

    it("Should call Router.navigate with the correct arguments.", fakeAsync(() => {
      componentWithMockBuilders.submit();
      expect(mockRouter.navigate).toHaveBeenCalledOnceWith([`/${VocabRoutePath.Root}`, VocabRoutePath.VocabLists]);
    }));
  });

  describe("ngOnDestroy", () => {
    it("Should unsubscribe from VocabListService.add subscription.", fakeAsync(() => {
      const mockSubscription = new Subscription();
      spyOn(addList$, "subscribe").and.callFake((): Subscription => {
        return mockSubscription;
      });
      spyOn(mockSubscription, "unsubscribe").and.callThrough();
      componentWithMockBuilders.submit();

      componentWithMockBuilders.ngOnDestroy();

      expect(mockSubscription.unsubscribe).toHaveBeenCalledOnceWith()
    }));
  });

  function constructComponentWithMockBuilders(): VocabListFormComponent {
    mockRouter = jasmine.createSpyObj("mockRouter", ["navigate"]);
    mockListService = jasmine.createSpyObj("mockListService", ["add"]);
    mockListFormBuilder = jasmine.createSpyObj("mockListFormBuilder", ["build"]);
    mockListItemFormBuilder = jasmine.createSpyObj("mockListItemFormBuilder", ["build"]);
    return new VocabListFormComponent(mockListService, mockRouter,
      mockListFormBuilder, mockListItemFormBuilder);
  }

  function constructCompenentWithRealBuilders(fb: FormBuilder): VocabListFormComponent {
    const listItemFormBuilder = new VocabListItemFormBuilder(fb);
    const listFormBuilder = new VocabListFormBuilder(fb, listItemFormBuilder);
    return new VocabListFormComponent(mockListService, mockRouter,
      listFormBuilder, listItemFormBuilder);
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
