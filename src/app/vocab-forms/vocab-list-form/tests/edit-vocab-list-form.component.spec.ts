import { FormBuilder } from "@angular/forms";
import { StubVocabListBuilder } from "../../../../testing/stub-vocab-list-builder";
import { VocabList } from "../../../vocab/models";
import { ResolvedData } from "../../../vocab/models/data";
import { EditVocabListComponent } from "../edit-vocab-list.component";
import { VocabListFormComponentMocks } from "./vocab-list-form-mocks";
import { constructMockListForm, contructMocks, constructMockReturnValues } from "./vocab-list-form.spec.utilities";

describe("EditVocabListComponent", () => {
  let mocks: VocabListFormComponentMocks;
  let mockListForm: any;
  let mockVocabList: VocabList;
  let componentWithMockBuilders: EditVocabListComponent;
  let fb: FormBuilder;

  beforeAll(() => {
    fb = new FormBuilder();
  });

  beforeEach(() => {
    mocks = contructMocks();
    mockListForm = constructMockListForm(fb);
    constructMockReturnValues(mocks, mockListForm);

    mockVocabList = StubVocabListBuilder.stub().build();
    mocks.list = mockVocabList

    const mockDataSnapShot: { [key: string]: VocabList } = {};
    mockDataSnapShot[ResolvedData.ResolvedList] = mockVocabList
    mocks.route = {
      snapshot: {
        data: mockDataSnapShot,
      }
    };

    componentWithMockBuilders = new EditVocabListComponent(mocks.router,
      mocks.listService, mocks.listFormBuilder,
      mocks.listItemFormBuilder, mocks.observableBuilderForMocks,
      mocks.route);

    componentWithMockBuilders.ngOnInit();
  })

  describe("ngOnInit", () => {
    it("Should call title observable builder with correct arguments.", () => {
      console.log(mocks.list!);
      expect(mocks.observableBuilderForMocks.build)
        .toHaveBeenCalledOnceWith(mocks.list!.name, mockListForm.controls.name);
    });
  });
});
