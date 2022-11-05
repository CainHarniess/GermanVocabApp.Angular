import { fakeAsync } from "@angular/core/testing";
import { AbstractControl, FormControl, ValidatorFn, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { FollowingControlValidatorOptions, FollowingControlValidatorVisitor } from "..";

describe(FollowingControlValidatorVisitor.name, () => {
  let visitor: FollowingControlValidatorVisitor;
  let mockVisitor: any;
  let mockIsVisible$: Subject<boolean>;
  let mockNotifier$: Subject<any>;
  let testValidator: ValidatorFn = Validators.required;
  let actualControl: AbstractControl<any>;

  beforeEach(() => {
    mockVisitor = {
      addValidator: (validator: ValidatorFn, control: AbstractControl<any, any>) => { },
      removeValidator: (validator: ValidatorFn, control: AbstractControl<any, any>) => { },
    };

    visitor = new FollowingControlValidatorVisitor(mockVisitor);

    mockIsVisible$ = new Subject<boolean>();
    mockNotifier$ = new Subject<any>();

    actualControl = new FormControl<any>("Hi");

    let options = new FollowingControlValidatorOptions(actualControl, mockIsVisible$,
      mockNotifier$, testValidator);

    visitor.configure(options);
  });

  describe("addValidator", () => {
    it("Should mark control as untouched when control becomes visible.", fakeAsync(() => {
      spyOn(actualControl, "markAsUntouched");

      mockIsVisible$.subscribe(() => {
        expect(actualControl.markAsUntouched).toHaveBeenCalledTimes(1);
      });
      mockIsVisible$.next(true);
    }));

    it("Should add validators when control becomes visible.", () => {
      spyOn(mockVisitor, "addValidator");

      mockIsVisible$.subscribe(() => {
        expect(mockVisitor.addValidator).toHaveBeenCalledOnceWith(testValidator, actualControl);
      });
      mockIsVisible$.next(true);
    });

    it("Should set control value to null when control becomes not visible.", () => {
      spyOn(actualControl, "setValue");

      mockIsVisible$.subscribe(() => {
        expect(actualControl.setValue).toHaveBeenCalledOnceWith(null);
      });
      mockIsVisible$.next(false);
    });

    it("Should remove validators when control becomes not visible.", () => {
      spyOn(mockVisitor, "removeValidator");

      mockIsVisible$.subscribe(() => {
        expect(mockVisitor.removeValidator).toHaveBeenCalledOnceWith(testValidator, actualControl);
      });
      mockIsVisible$.next(false);
    });
  });

});
