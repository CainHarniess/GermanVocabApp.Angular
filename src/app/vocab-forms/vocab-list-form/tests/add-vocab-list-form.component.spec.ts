import { fakeAsync } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { Subscription } from "rxjs";

import { VocabRoutePath } from "../../../vocab/vocab-routing.module";
import { VocabListFormBuilder, VocabListItemFormBuilder } from "../../services";
import { AddVocabListFormComponent } from "../add-vocab-list-form.component";
import { MockReturnValues } from "./mock-return-values";
import { VocabListFormComponentMocks } from "./vocab-list-form-mocks";
import { constructMockListForm, constructMockReturnValues, contructMocks } from "./vocab-list-form.spec.utilities";

describe("AddVocabListComponent", () => {
  let mocks: VocabListFormComponentMocks;
  let mockReturnValues: MockReturnValues;
  let newMockListForm: any;
  let componentWithMockBuilders: AddVocabListFormComponent;
  let componentWithRealBuilders: AddVocabListFormComponent;
  let fb: FormBuilder;

  beforeAll(() => {
    fb = new FormBuilder();
  });

  beforeEach(() => {
    mocks = contructMocks();
    newMockListForm = constructMockListForm(fb);
    mockReturnValues = constructMockReturnValues(mocks, newMockListForm);

    componentWithMockBuilders = new AddVocabListFormComponent(mocks.router,
      mocks.listService, mocks.listFormBuilder, mocks.listItemFormBuilder,
      mocks.observableBuilderForMocks);

    const listItemFormBuilder = new VocabListItemFormBuilder(fb);
    const listFormBuilder = new VocabListFormBuilder(fb, listItemFormBuilder);
    componentWithRealBuilders = new AddVocabListFormComponent(mocks.router,
      mocks.listService, listFormBuilder, listItemFormBuilder,
      mocks.observableBuilderForReal);

    componentWithMockBuilders.ngOnInit();
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
      componentWithRealBuilders.descriptionLength$
        .subscribe((length: number) => hasEmited = true);
      const descriptionControl = componentWithRealBuilders.form.controls.description;

      const longString: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
      descriptionControl.setValue(longString);

      expect(hasEmited).toBeTrue();
    }));

    it("Should not emit if length is smaller than or equal to the specified value", fakeAsync(() => {
      let hasEmited: boolean = false;
      componentWithRealBuilders.ngOnInit();
      componentWithRealBuilders.descriptionLength$
        .subscribe((length: number) => hasEmited = true);

      componentWithRealBuilders.form.controls.description.setValue("Hello");

      expect(hasEmited).toBeFalse();
    }));
  });

  describe("addListItemControl", () => {
    it("Should generate a new list item form.", () => {
      componentWithMockBuilders.addListItemControl();
      expect(mocks.listItemFormBuilder.build).toHaveBeenCalledOnceWith();
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

      const listItemsControl = componentWithRealBuilders.form.controls.listItems;
      expect(listItemsControl.controls.length).toEqual(3);

      componentWithRealBuilders.removeListItemControl(1);
      expect(listItemsControl.controls.length).toEqual(2);
    });

    it("Should remove a list item form at the correct index.", () => {
      const listItemsControl = componentWithMockBuilders.form.controls.listItems;
      const controls = listItemsControl.controls;
      const expected: any = [controls[0], controls[2], controls[3]];

      componentWithMockBuilders.removeListItemControl(1);
      expect(listItemsControl.controls).toEqual(expected);
    });
  });

  describe("submit", () => {
    it("Should call the add method on the vocab list service with the correct argument.", () => {
      componentWithMockBuilders.submit();
      expect(mocks.listService.add).toHaveBeenCalledOnceWith(newMockListForm.value!);
    });

    it("Should call Router.navigate with the correct arguments.", fakeAsync(() => {
      componentWithMockBuilders.submit();
      expect(mocks.router.navigate).toHaveBeenCalledOnceWith([`/${VocabRoutePath.Root}`, VocabRoutePath.VocabLists]);
    }));
  });

  describe("ngOnDestroy", () => {
    it("Should unsubscribe from VocabListService.add subscription.", fakeAsync(() => {
      const mockSubscription = new Subscription();
      spyOn(mockReturnValues.newListId$, "subscribe").and.callFake((): Subscription => {
        return mockSubscription;
      });
      spyOn(mockSubscription, "unsubscribe").and.callThrough();
      componentWithMockBuilders.submit();

      componentWithMockBuilders.ngOnDestroy();

      expect(mockSubscription.unsubscribe).toHaveBeenCalledOnceWith()
    }));
  });
});
