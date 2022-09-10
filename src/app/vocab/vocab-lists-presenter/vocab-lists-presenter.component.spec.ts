import { VocabListsPresenterComponent } from "./vocab-lists-presenter.component";

describe("VocabListsPresenter", () => {
  let component: VocabListsPresenterComponent;
  let testId: string = "956919ac-d2a1-4225-93f3-bdf7e3180db8";

  beforeEach(() => {
    component = new VocabListsPresenterComponent();
    spyOn(component.view, "emit");
    spyOn(component.edit, "emit");
  });


  describe("handleViewList", () => {
    it("Should fire view event.", () => {
      component.viewList(testId);
      expect(component.view.emit).toHaveBeenCalledOnceWith(testId)
    });
  });

  describe("handleEditList", () => {
    it("Should fire edit event.", () => {
      component.editList(testId);
      expect(component.edit.emit).toHaveBeenCalledOnceWith(testId)
    });
  });
})
