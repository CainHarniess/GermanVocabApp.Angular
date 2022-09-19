import { fakeAsync } from "@angular/core/testing";
import { FormArray, FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs";
import { NotWellDefinedError } from "../../../../core/errors";
import { StubVocabListBuilder } from "../../../../testing/stub-vocab-list-builder";
import { StubVocabListItemBuilder } from "../../../../testing/stub-vocab-list-item-builder";
import { VocabRoutePath } from "../../../shared/routing";
import { VocabList, VocabListItem } from "../../../vocab/models";
import { ResolvedData } from "../../../vocab/models/data";
import { VocabListItemFormBuilder } from "../../services";
import { EditVocabListComponent } from "../edit-vocab-list.component";
import { MockReturnValues } from "./mock-return-values";
import { VocabListFormComponentMocks } from "./vocab-list-form-mocks";
import { constructMockListForm, contructMocks, constructMockReturnValues } from "./vocab-list-form.spec.utilities";

describe(`${EditVocabListComponent.name}`, () => {
  let mocks: VocabListFormComponentMocks;
  let mockReturnValues: MockReturnValues;
  let component: EditVocabListComponent;
  let fb: FormBuilder;
  let itemBuildIncrement: number;

  beforeAll(() => {
    fb = new FormBuilder();
  });

  beforeEach(() => {
    mocks = contructMocks();
    mocks.listForm = constructMockListForm(fb);
    mockReturnValues = constructMockReturnValues(mocks, mocks.listForm);

    mocks.list = StubVocabListBuilder.stub()
      .withId("dde2794c-ae67-42a3-b0ee-2682407fad14").build();
    for (let i: number = 0; i < 2; i++) {
      const stubListItem: VocabListItem = StubVocabListItemBuilder.stub().withId('' + i).build();
      mocks.list.listItems.push(stubListItem);
    }

    const mockDataSnapShot: { [key: string]: VocabList } = {};
    mockDataSnapShot[ResolvedData.ResolvedList] = mocks.list
    mocks.route = {
      snapshot: {
        data: mockDataSnapShot,
      }
    };

    itemBuildIncrement = -1;
    mocks.listItemFormBuilder.build.and.callFake((fn: Function): any => {
      itemBuildIncrement++;
      return itemBuildIncrement;
    });

    const listItemsControl: any = mocks.listForm.controls.listItems;
    spyOn(listItemsControl, "push");

    component = new EditVocabListComponent(mocks.router,
      mocks.listService, mocks.listFormBuilder,
      mocks.listItemFormBuilder, mocks.observableBuilderForMocks,
      mocks.route);

    component.ngOnInit();
  })

  it("Should have correct pre-edit list value", () => {
    expect(component.preEditList).toBe(mocks.list!);
  });

  describe("ngOnInit", () => {
    it("Should call title observable builder with correct arguments.", () => {
      expect(mocks.observableBuilderForMocks.build)
        .toHaveBeenCalledOnceWith(mocks.list!.name, mocks.listForm.controls.name);
    });

    it(`Should call ${VocabListItemFormBuilder.name}.build the correct number of times`, () => {
      if (!mocks.list) {
        throw new NotWellDefinedError("Cannot run test when mock list is not well-defined.");
      }

      const listItemCount: number = mocks.list.listItems.length;
      expect(mocks.listItemFormBuilder.build).toHaveBeenCalledTimes(listItemCount);
    });

    it(`Should call ${FormArray.name}.push the correct number of times with the correct arguments.`, () => {
      if (!mocks.list) {
        throw new NotWellDefinedError("Cannot run test when mock list is not well-defined.");
      }

      const listItemsControl: any = mocks.listForm.controls.listItems;
      const expectedArgs: any[] = mocks.list.listItems;

      for (let i: number = 0; i < expectedArgs.length; i++) {
        expect(listItemsControl.push).toHaveBeenCalledWith(i);
      }

      expect(listItemsControl.push).toHaveBeenCalledTimes(expectedArgs.length);
    });
  });

  describe("submit", () => {
    it("Should call the vocab service witht the correct arguments.", () => {
      if (!mocks.list) {
        throw new NotWellDefinedError("Cannot run test when mock list is not well-defined.");
      }

      expect(mocks.listForm.value.id).toBeUndefined();
      component.submit();
      expect(mocks.listForm.value.id).toBeUndefined();
      expect(mocks.listService.update).toHaveBeenCalledOnceWith(mocks.list.id, mocks.listForm.value);
    });

    it("Should call Router.navigate with the correct arguments.", fakeAsync(() => {
      component.submit();
      expect(mocks.router.navigate).toHaveBeenCalledOnceWith([`/${VocabRoutePath.Root}`, VocabRoutePath.VocabLists]);
    }));
  });

  describe("ngOnDestroy", () => {
    it("Should unsubscribe from VocabListService.add subscription.", fakeAsync(() => {
      const mockSubscription = new Subscription();
      spyOn(mockReturnValues.updatedList$, "subscribe").and.callFake((): Subscription => {
        return mockSubscription;
      });
      spyOn(mockSubscription, "unsubscribe").and.callThrough();
      component.submit();

      component.ngOnDestroy();

      expect(mockSubscription.unsubscribe).toHaveBeenCalledOnceWith();
    }));
  });
});
