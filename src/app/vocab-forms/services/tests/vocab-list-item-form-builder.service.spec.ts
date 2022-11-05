import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { VocabListItemFormBuilder } from "..";
import { VocabListForm, VocabListItemForm } from "../../models";

type TestCase = {
  controlName: string,
  expectedInitialValue: any,
};

describe("VocabListItemFormBuilder", () => {
  let builder: VocabListItemFormBuilder;
  let fb: FormBuilder
  let mockListValidationProvider: any = {
    addValidationTo: (form: FormGroup<VocabListForm>) => { },
  };

  let form: FormGroup<VocabListItemForm>;

  beforeEach(() => {
    fb = new FormBuilder();
    builder = new VocabListItemFormBuilder(fb, mockListValidationProvider);
    form = builder.build();
  });

  describe("build", () => {
    let tests: TestCase[] = [
      { controlName: "wordType", expectedInitialValue: null },
      { controlName: "isWeakMasculineNoun", expectedInitialValue: null },
      { controlName: "reflexiveCase", expectedInitialValue: null },
      { controlName: "separability", expectedInitialValue: null },
      { controlName: "transitivity", expectedInitialValue: null },
      { controlName: "thirdPersonPresent", expectedInitialValue: null },
      { controlName: "thirdPersonImperfect", expectedInitialValue: null },
      { controlName: "auxiliaryVerb", expectedInitialValue: null },
      { controlName: "perfect", expectedInitialValue: null },
      { controlName: "gender", expectedInitialValue: null },
      { controlName: "german", expectedInitialValue: null },
      { controlName: "plural", expectedInitialValue: null },
      { controlName: "preposition", expectedInitialValue: null },
      { controlName: "prepositionCase", expectedInitialValue: null },
      { controlName: "comparative", expectedInitialValue: null },
      { controlName: "superlative", expectedInitialValue: null },
      { controlName: "english", expectedInitialValue: null },
      { controlName: "fixedPlurality", expectedInitialValue: null },
      { controlName: "isIrregular", expectedInitialValue: null },
    ];

    tests.forEach(test => {
      it(`Should add ${test.controlName} control with default value`
        + ` ${test.expectedInitialValue}.`, () => {
          const control: AbstractControl<any> = form.get(test.controlName)!;
          expect(control.value).toBe(test.expectedInitialValue);
        });
    });
  });

  describe("buildFromModel", () => {
    let tests: TestCase[] = [
      { controlName: "wordType", expectedInitialValue: null },
      { controlName: "isWeakMasculineNoun", expectedInitialValue: null },
      { controlName: "reflexiveCase", expectedInitialValue: null },
      { controlName: "separability", expectedInitialValue: null },
      { controlName: "transitivity", expectedInitialValue: null },
      { controlName: "thirdPersonPresent", expectedInitialValue: null },
      { controlName: "thirdPersonImperfect", expectedInitialValue: null },
      { controlName: "auxiliaryVerb", expectedInitialValue: null },
      { controlName: "perfect", expectedInitialValue: null },
      { controlName: "gender", expectedInitialValue: null },
      { controlName: "german", expectedInitialValue: null },
      { controlName: "plural", expectedInitialValue: null },
      { controlName: "preposition", expectedInitialValue: null },
      { controlName: "prepositionCase", expectedInitialValue: null },
      { controlName: "comparative", expectedInitialValue: null },
      { controlName: "superlative", expectedInitialValue: null },
      { controlName: "english", expectedInitialValue: null },
      { controlName: "fixedPlurality", expectedInitialValue: null },
      { controlName: "isIrregular", expectedInitialValue: null },
    ];

    tests.forEach(test => {
      it(`Should add ${test.controlName} control with default value`
        + ` ${test.expectedInitialValue}.`, () => {
          const control: AbstractControl<any> = form.get(test.controlName)!;
          expect(control.value).toBe(test.expectedInitialValue);
      });
    });
  });
});
