import { fakeAsync } from "@angular/core/testing";
import { EMPTY, Observable, of } from "rxjs";
import { ListTitleObservableBuilder } from "..";
import { Null } from "../../../../core/types";

describe("ListTitleObservableBuilder", () => {
  let builder: ListTitleObservableBuilder;
  let mockFormControl: any;
  let result$: Observable<string>;
  const defaultValue: string = "Default";

  beforeEach(() => {
    builder = new ListTitleObservableBuilder();
    mockFormControl = { valueChanges: EMPTY, };
  });

  describe("build", () => {
    it("Should start with the specified default value.", fakeAsync(() => {
      result$ = builder.build(defaultValue, mockFormControl);
      result$.subscribe((val: string) => {
        expect(val).toBe(defaultValue);
      });
    }));

    it("Should emit the control value if it is well-defined and not the empty string.", fakeAsync(() => {
      const controlValue: string = "Expected";
      mockFormControl = { valueChanges: of(controlValue), };
      result$ = builder.build(defaultValue, mockFormControl);
      result$.subscribe((val: string) => {
        expect(val).toBe(controlValue);
      });
    }));

    it("Should emit the default value if the control value is the empty string.", fakeAsync(() => {
      const controlValue: string = "";
      mockFormControl = { valueChanges: of(controlValue), };
      result$ = builder.build(defaultValue, mockFormControl);
      result$.subscribe((val: string) => {
        expect(val).toBe(defaultValue);
      });
    }));

    it("Should emit the default value if the control value is null.", fakeAsync(() => {
      const controlValue: Null<string> = null;
      mockFormControl = { valueChanges: of(controlValue), };
      result$ = builder.build(defaultValue, mockFormControl);
      result$.subscribe((val: string) => {
        expect(val).toBe(defaultValue);
      });
    }));
  });
});
