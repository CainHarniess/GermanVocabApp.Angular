import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { VocabListItemFormBuilder } from "..";
import { isNullOrUndefined } from "../../../../utilities";
import { VocabListItemForm } from "../../models";

type TestCase = {
  controlName: string,
  expectedInitialValue: any,
  expectedValidator: ValidatorFn | null,
};

describe("VocabListItemFormBuilder", () => {
  let builder: VocabListItemFormBuilder;
  let fb: FormBuilder
  let form: FormGroup<VocabListItemForm>;

  beforeEach(() => {
    fb = new FormBuilder();
    builder = new VocabListItemFormBuilder(fb);
    form = builder.build();
  });

  describe("build", () => {
    let tests: TestCase[] = [
      { controlName: "wordType", expectedInitialValue: null, expectedValidator: Validators.required },
      { controlName: "isWeakMasculineNoun", expectedInitialValue: null, expectedValidator: null },
      { controlName: "reflexiveCase", expectedInitialValue: null, expectedValidator: null },
      { controlName: "separability", expectedInitialValue: null, expectedValidator: null },
      { controlName: "isTransitive", expectedInitialValue: null, expectedValidator: null },
      { controlName: "thirdPersonPresent", expectedInitialValue: null, expectedValidator: null },
      { controlName: "thirdPersonImperfect", expectedInitialValue: null, expectedValidator: null },
      { controlName: "auxiliaryVerb", expectedInitialValue: null, expectedValidator: null },
      { controlName: "perfect", expectedInitialValue: null, expectedValidator: null },
      { controlName: "gender", expectedInitialValue: null, expectedValidator: null },
      { controlName: "german", expectedInitialValue: null, expectedValidator: Validators.required },
      { controlName: "plural", expectedInitialValue: null, expectedValidator: null },
      { controlName: "preposition", expectedInitialValue: null, expectedValidator: null },
      { controlName: "prepositionCase", expectedInitialValue: null, expectedValidator: null },
      { controlName: "comparative", expectedInitialValue: null, expectedValidator: null },
      { controlName: "superlative", expectedInitialValue: null, expectedValidator: null },
      { controlName: "english", expectedInitialValue: null, expectedValidator: Validators.required },
      { controlName: "fixedPlurality", expectedInitialValue: null, expectedValidator: null },
      { controlName: "isIrregular", expectedInitialValue: null, expectedValidator: null },
    ];

    tests.forEach(test => {
      it(`Should add ${test.controlName} control with default value`
        + ` ${test.expectedInitialValue}.`, () => {
          const control: AbstractControl<any> = form.get(test.controlName)!;
          expect(control.value).toBe(test.expectedInitialValue);
        });

      if (isNullOrUndefined(test.expectedValidator)) {
        it(`Should not provide initial validator function to ${test.controlName} control.`,
          () => {
            const control: AbstractControl<any> = form.get(test.controlName)!;
            expect(control.validator).toBe(null);
          });
      } else {
        it(`Should set ${test.controlName} validator to be`
          + `Validators.${test.expectedValidator!.name}.`, () => {
            const control: AbstractControl<any> = form.get(test.controlName)!;
            expect(control.validator).toBe(test.expectedValidator);
          });
      }
    });
  });

  describe("buildFromModel", () => {
    let tests: TestCase[] = [
      { controlName: "wordType", expectedInitialValue: null, expectedValidator: Validators.required },
      { controlName: "isWeakMasculineNoun", expectedInitialValue: null, expectedValidator: null },
      { controlName: "reflexiveCase", expectedInitialValue: null, expectedValidator: null },
      { controlName: "separability", expectedInitialValue: null, expectedValidator: null },
      { controlName: "isTransitive", expectedInitialValue: null, expectedValidator: null },
      { controlName: "thirdPersonPresent", expectedInitialValue: null, expectedValidator: null },
      { controlName: "thirdPersonImperfect", expectedInitialValue: null, expectedValidator: null },
      { controlName: "auxiliaryVerb", expectedInitialValue: null, expectedValidator: null },
      { controlName: "perfect", expectedInitialValue: null, expectedValidator: null },
      { controlName: "gender", expectedInitialValue: null, expectedValidator: null },
      { controlName: "german", expectedInitialValue: null, expectedValidator: Validators.required },
      { controlName: "plural", expectedInitialValue: null, expectedValidator: null },
      { controlName: "preposition", expectedInitialValue: null, expectedValidator: null },
      { controlName: "prepositionCase", expectedInitialValue: null, expectedValidator: null },
      { controlName: "comparative", expectedInitialValue: null, expectedValidator: null },
      { controlName: "superlative", expectedInitialValue: null, expectedValidator: null },
      { controlName: "english", expectedInitialValue: null, expectedValidator: Validators.required },
      { controlName: "fixedPlurality", expectedInitialValue: null, expectedValidator: null },
      { controlName: "isIrregular", expectedInitialValue: null, expectedValidator: null },
    ];

    tests.forEach(test => {
      xit(`Should add ${test.controlName} control with default value`
        + ` ${test.expectedInitialValue}.`, () => {
          const control: AbstractControl<any> = form.get(test.controlName)!;
          expect(control.value).toBe(test.expectedInitialValue);
        });
    });
  });
});
