import { fakeAsync } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { Subscription } from "rxjs";
import { createMockNotificationService } from "../../../../core/test-utilities";
import { VocabRoutePath } from "../../../shared/routing";

import { VocabListFormBuilder, VocabListItemFormBuilder } from "../../services";
import { AddVocabListFormComponent } from "../add-vocab-list-form.component";
import { MockReturnValues } from "./mock-return-values";
import { VocabListFormComponentMocks } from "./vocab-list-form-mocks";
import { constructMockListForm, constructMockReturnValues, contructMocks } from "./vocab-list-form.spec.utilities";

describe("AddVocabListComponent", () => {
  let mocks: VocabListFormComponentMocks;
  let mockReturnValues: MockReturnValues;
  let component: AddVocabListFormComponent;
  let componentWithRealBuilders: AddVocabListFormComponent;
  let fb: FormBuilder = new FormBuilder();
  const mockNotificationService: any = createMockNotificationService();

  beforeEach(() => {
    mocks = contructMocks();
    mocks.listItemWordingProvider = jasmine.createSpyObj("mockListItemWordingProvider",
      ["provide"]);

    mocks.listForm = constructMockListForm(fb);
    mockReturnValues = constructMockReturnValues(mocks, mocks.listForm);

    component = new AddVocabListFormComponent(mocks.router,
      mocks.vocabService, mocks.listFormBuilder, mocks.itemFormBuilder,
      mocks.observableBuilderForMocks, mocks.errorMessageProvider,
      mocks.errorStateMatcher, mockNotificationService, mocks.listItemWordingProvider);

    const listItemFormBuilder = new VocabListItemFormBuilder(fb, mocks.itemValidationProvider);
    const listFormBuilder = new VocabListFormBuilder(fb, listItemFormBuilder, mocks.validationProvider);
    componentWithRealBuilders = new AddVocabListFormComponent(mocks.router,
      mocks.vocabService, listFormBuilder, listItemFormBuilder,
      mocks.observableBuilderForReal, mocks.errorMessageProvider,
      mocks.errorStateMatcher, mockNotificationService, mocks.listItemWordingProvider);
  });

  describe("ngOnInit", () => {
    it("Should build the vocab list form", () => {
      component.ngOnInit();
      expect(mocks.listFormBuilder.build).toHaveBeenCalledOnceWith();
    });

    it("Should call title observable builder with correct arguments.", () => {
      component.ngOnInit();
      expect(mocks.observableBuilderForMocks.build)
        .toHaveBeenCalledOnceWith("New vocab list", mocks.listForm.controls.name);
    });

    it("Should call list item wording observable with correct argument.", () => {
      component.ngOnInit();
      expect(mocks.listItemWordingProvider.provide)
        .toHaveBeenCalledOnceWith(component.listItemControlCount$);
    });

    it("Should call the error message provider for the relevant controls.", () => {
      const provideForSpy = spyOn(mocks.errorMessageProvider, "provideFor");
      provideForSpy.withArgs(mocks.listForm.controls.name);
      provideForSpy.withArgs(mocks.listForm.controls.description);

      component.ngOnInit();

      expect(mocks.errorMessageProvider.provideFor).toHaveBeenCalledWith(mocks.listForm.controls.name);
      expect(mocks.errorMessageProvider.provideFor).toHaveBeenCalledWith(mocks.listForm.controls.description);
    });
  });

  describe("descriptionLength$", () => {
    it("Should emit if length is greater than the specified value", fakeAsync(() => {
      componentWithRealBuilders.ngOnInit();

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
      component.ngOnInit();

      component.addListItemControl();
      expect(mocks.itemFormBuilder.build).toHaveBeenCalledOnceWith();
    });

    it("Should set the list item control count subject value to the list form's value.", () => {
      componentWithRealBuilders.ngOnInit();

      componentWithRealBuilders.addListItemControl();
      componentWithRealBuilders.addListItemControl();
      expect(componentWithRealBuilders.listItemControlCount$.value).toBe(2);
    });
  });

  describe("copyListItemControl", () => {
    it("Should throw exception if invalid index is provided.", () => {
      component.ngOnInit();

      expect(function () { component.copyListItemControl(-1) }).toThrowError("Index may not be negative.");
    });

    it("Should add a list item form.", () => {
      componentWithRealBuilders.ngOnInit();

      componentWithRealBuilders.addListItemControl();
      componentWithRealBuilders.addListItemControl();
      componentWithRealBuilders.addListItemControl();

      const listItemsControl = componentWithRealBuilders.form.controls.listItems;
      expect(listItemsControl.controls.length).toEqual(3);

      componentWithRealBuilders.copyListItemControl(1);
      expect(listItemsControl.controls.length).toEqual(4);
    });

    it("Should add the form control at the specified index.", () => {
      component.ngOnInit();

      const listItemsControl = mocks.listForm.controls.listItems;
      const fakeGroup = fb.group("New control");

      spyOn(listItemsControl, "at").and.callFake((index: number) => {
        return fakeGroup;
      });

      spyOn(listItemsControl, "insert");

      mocks.itemFormBuilder.buildFromFormGroup.and.returnValue(fakeGroup);

      component.copyListItemControl(1);
      expect(listItemsControl.insert).toHaveBeenCalledOnceWith(1, fakeGroup);
    });

    it("Should update the list item control count observable.", () => {
      component.ngOnInit();

      const listItemsControl = mocks.listForm.controls.listItems;
      const fakeGroup = fb.group("New control");

      spyOn(listItemsControl, "at").and.callFake((index: number) => {
        return fakeGroup;
      });

      spyOn(listItemsControl, "insert");

      spyOn(component.listItemControlCount$, "next");

      mocks.itemFormBuilder.buildFromFormGroup.and.returnValue(fakeGroup);

      component.copyListItemControl(1);
      expect(component.listItemControlCount$.next).toHaveBeenCalledOnceWith(listItemsControl.length);
    });
  });

  describe("removeListItemControl", () => {
    it("Should throw exception if invalid index is provided.", () => {
      component.ngOnInit();

      expect(function () { component.removeListItemControl(-1) }).toThrowError("Index may not be negative.");
    });

    it("Should remove a list item form.", () => {
      componentWithRealBuilders.ngOnInit();

      componentWithRealBuilders.addListItemControl();
      componentWithRealBuilders.addListItemControl();
      componentWithRealBuilders.addListItemControl();

      const listItemsControl = componentWithRealBuilders.form.controls.listItems;
      expect(listItemsControl.controls.length).toEqual(3);

      componentWithRealBuilders.removeListItemControl(1);
      expect(listItemsControl.controls.length).toEqual(2);
    });

    it("Should call FormArray.removeAt with the correct argument.", () => {
      component.ngOnInit();

      const listItemsControl = mocks.listForm.controls.listItems;
      spyOn(listItemsControl, "removeAt");

      component.removeListItemControl(1);
      expect(listItemsControl.removeAt).toHaveBeenCalledOnceWith(1);
    });

    it("Should update the list item control count observable.", () => {
      component.ngOnInit();

      const listItemsControl = mocks.listForm.controls.listItems;
      spyOn(component.listItemControlCount$, "next");
      component.removeListItemControl(1);
      expect(component.listItemControlCount$.next).toHaveBeenCalledOnceWith(listItemsControl.length);
    });
  });

  describe("submit", () => {
    it("Should call the add method on the vocab list service with the correct argument.", () => {
      component.ngOnInit();

      component.submit();
      expect(mocks.vocabService.add).toHaveBeenCalledOnceWith(mocks.listForm.value!);
    });

    it("Should call Router.navigate with the correct arguments.", fakeAsync(() => {
      component.ngOnInit();

      component.submit();
      expect(mocks.router.navigate).toHaveBeenCalledOnceWith([`/${VocabRoutePath.Root}`, VocabRoutePath.VocabLists]);
    }));
  });

  describe("ngOnDestroy", () => {
    it("Should unsubscribe from VocabListService.add subscription.", fakeAsync(() => {
      component.ngOnInit();

      const mockSubscription = new Subscription();
      spyOn(mockReturnValues.newListId$, "subscribe").and.callFake((): Subscription => {
        return mockSubscription;
      });
      spyOn(mockSubscription, "unsubscribe").and.callThrough();
      component.submit();

      component.ngOnDestroy();

      expect(mockSubscription.unsubscribe).toHaveBeenCalledOnceWith()
    }));
  });
});
