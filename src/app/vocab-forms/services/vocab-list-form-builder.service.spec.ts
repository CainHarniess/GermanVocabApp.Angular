import { Validators } from "@angular/forms";
import { VocabListFormBuilder } from "./vocab-list-form-builder.service";

describe("VocabListFormBuilder", () => {
  let mockFormBuilder: any;
  let builder: VocabListFormBuilder;

  beforeEach(() => {
    mockFormBuilder = jasmine.createSpyObj("mockFormBuilder", ["group", "control", "array"]);
    builder = new VocabListFormBuilder(mockFormBuilder);
  });

  describe("build()", () => {


    it("Should call FormBuilder.group.", () => {
      builder.build();
      expect(mockFormBuilder.group).toHaveBeenCalled();
    });

    it("Should call FormBuilder.control with correct values.", () => {
      builder.build();
      expect(mockFormBuilder.control).toHaveBeenCalledWith(null, Validators.required);
      expect(mockFormBuilder.control).toHaveBeenCalledWith(null);
    });

    it("Should call FormBuilder.array with correct values.", () => {
      builder.build();
      expect(mockFormBuilder.array).toHaveBeenCalledWith([]);
    });
  });
});
