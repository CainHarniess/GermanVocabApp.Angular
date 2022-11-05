import { ValidatorFn, Validators } from "@angular/forms";
import { ControlValidatorVisitor } from "..";
import { createMockControl } from "./spec.utilities";

describe(ControlValidatorVisitor.name, () => {
  let visitor: ControlValidatorVisitor;
  let mockControl: any;
  let testValidator: ValidatorFn = Validators.required;

  beforeEach(() => {
    visitor = new ControlValidatorVisitor();
    mockControl = createMockControl();
    spyOn(mockControl, "addValidators");
    spyOn(mockControl, "removeValidators");
    spyOn(mockControl, "updateValueAndValidity");
  });

  describe("addValidator", () => {
    it("Should call addValidators on control with correct argument.", () => {
      visitor.addValidator(testValidator, mockControl);
      expect(mockControl.addValidators).toHaveBeenCalledOnceWith(testValidator);
    });

    it("Should call updateValueAndValidity on control once.", () => {
      visitor.addValidator(testValidator, mockControl);
      expect(mockControl.updateValueAndValidity).toHaveBeenCalledTimes(1);
    });
  });

  describe("removeValidator", () => {
    it("Should call removeValidators on control with correct argument.", () => {
      visitor.removeValidator(testValidator, mockControl);
      expect(mockControl.removeValidators).toHaveBeenCalledOnceWith(testValidator);
    });

    it("Should call updateValueAndValidity on control once.", () => {
      visitor.removeValidator(testValidator, mockControl);
      expect(mockControl.updateValueAndValidity).toHaveBeenCalledTimes(1);
    });
  });
});
