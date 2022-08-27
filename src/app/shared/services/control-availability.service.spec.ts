import { Validators } from "@angular/forms";
import { ControlAvailabilityService } from "./control-availability.service";

describe("ControlAvailabilityService", () => {
  let controlAvailabilityService: ControlAvailabilityService;
  let mockControl: any;
  const mockControlFunctionList: string[] = [
    "addValidators",
    "removeValidators",
    "setValue",
    "updateValueAndValidity",
    "markAsUntouched",
  ];

  describe("configureControl | singular", () => {
    beforeEach(() => {
      controlAvailabilityService = new ControlAvailabilityService();
      mockControl = jasmine.createSpyObj("mockControl", mockControlFunctionList);
    });

    it("Should call control markAsUntouched with correct argument method when result is true.", () => {
      controlAvailabilityService.configure(mockControl, true);
      expect(mockControl.markAsUntouched).toHaveBeenCalled();
    });

    it("Should call control addValidators with correct argument method when result is true.", () => {
      controlAvailabilityService.configure(mockControl, true);
      expect(mockControl.addValidators).toHaveBeenCalledOnceWith([Validators.required]);
    });

    it("Should call control removeValidators method when result is false.", () => {
      controlAvailabilityService.configure(mockControl, false);
      expect(mockControl.removeValidators).toHaveBeenCalledOnceWith([Validators.required]);
    });

    it("Should not call control set value when result is true.", () => {
      controlAvailabilityService.configure(mockControl, true);
      expect(mockControl.setValue).not.toHaveBeenCalled();
    });

    it("Should not call control markAsUntouched with correct argument method when result is false.", () => {
      controlAvailabilityService.configure(mockControl, false);
      expect(mockControl.markAsUntouched).not.toHaveBeenCalled();
    });

    it("Should call control set value with null argument when result is false.", () => {
      controlAvailabilityService.configure(mockControl, false);
      expect(mockControl.setValue).toHaveBeenCalledOnceWith(null);
    });

    const tests = [true, false];

    tests.forEach(test => {
      it(`Should call control updateValueAndValidity when result is ${test}.`, () => {
        controlAvailabilityService.configure(mockControl, test);
        expect(mockControl.updateValueAndValidity).toHaveBeenCalled();
      });
    });
  });

  describe("configureControl | multi", () => {
    let mockControlCount: number = 3;
    let mockControls: any[] = [];

    beforeEach(() => {
      controlAvailabilityService = new ControlAvailabilityService();
      mockControls = [];
      for (let i: number = 0; i < mockControlCount; i++) {
        mockControls.push(jasmine.createSpyObj("mockControl", mockControlFunctionList));
      }
    });

    xit("Dummy test.", () => {
      expect(true).toBe(true);
    });

    mockControls.forEach(control => {
      it("Should call control addValidators the correct number of times.", () => {
        controlAvailabilityService.configure(mockControls, true);
        expect(mockControl.addValidators).toHaveBeenCalledTimes(1);
      });
    });

    mockControls.forEach(control => {
      it("Should call control removeValidators the correct number of times.", () => {
        controlAvailabilityService.configure(mockControls, true);
        expect(mockControl.addValidators).toHaveBeenCalledTimes(1);
      });
    });

    const tests = [true, false];

    tests.forEach(test => {
      mockControls.forEach(control => {
        it(`Should call control updateValueAndValidity the correct number of times when result is ${test}.`, () => {
          controlAvailabilityService.configure(mockControls, test);
          expect(mockControl.addValidators).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
