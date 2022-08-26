import { Validators } from "@angular/forms";
import { ControlAvailabilityService } from "./control-availability.service";

describe("ControlAvailabilityService", () => {
  let controlAvailabilityService: ControlAvailabilityService;
  let mockControl: any;

  beforeEach(() => {
    controlAvailabilityService = new ControlAvailabilityService();
    mockControl = jasmine.createSpyObj("mockControl", ["addValidators", "removeValidators", "setValue", "updateValueAndValidity"]);
  });

  describe("configureControl", () => {
    it("Should call control addValidators with correct argument method when result is true.", () => {
      controlAvailabilityService.configure(mockControl, true);
      expect(mockControl.addValidators).toHaveBeenCalledWith([Validators.required]);
    });

    it("Should call control removeValidators method when result is false.", () => {
      controlAvailabilityService.configure(mockControl, false);
      expect(mockControl.removeValidators).toHaveBeenCalledWith([Validators.required]);
    });

    it("Should call control set value with null argument when result is false.", () => {
      controlAvailabilityService.configure(mockControl, false);
      expect(mockControl.setValue).toHaveBeenCalledWith(null);
    });

    const tests = [true, false];

    tests.forEach(test => {
      it(`Should call control updateValueAndValidity when result is ${test}.`, () => {
        controlAvailabilityService.configure(mockControl, test);
        expect(mockControl.updateValueAndValidity).toHaveBeenCalled();
      });
    });
  });
});
