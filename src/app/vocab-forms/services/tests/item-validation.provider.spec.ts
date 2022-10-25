import { ValidatorFn, Validators } from "@angular/forms";
import { wordMaxLength, wordMinLength } from "../../../vocab/models/data/constraints/item-data-constraints";
import { ItemValidationProvider } from "../item-validation.provider";

describe(ItemValidationProvider.name, () => {
  let provider: ItemValidationProvider;
  let validatorFactory: any = {
    create: {}
  };
  let factoryCreateSpy: any;
  // TODO: Refactor declaration shared with list validation provider into a shared builder or something.
  let form: any = {
    controls: {
      wordType: {
        addValidators: function () { },
        updateValueAndValidity: function () { },
      },
      english: {
        addValidators: function () { },
        updateValueAndValidity: function () { },
      },
      german: {
        addValidators: function () { },
        updateValueAndValidity: function () { },
      },
    }
  };
  let factoryValidator: (minLength: number) => ValidatorFn = Validators.minLength;

  beforeEach(() => {

    factoryCreateSpy = spyOn(validatorFactory, "create").and.returnValue(factoryValidator);
    provider = new ItemValidationProvider(validatorFactory);
  });

  describe("constructor", () => {
    it("Build the validators with the correct values", () => {
      expect(factoryCreateSpy).toHaveBeenCalledTimes(2);
      expect(factoryCreateSpy).toHaveBeenCalledWith(wordMinLength, wordMaxLength);
    });
  });

  describe("addValidationTo", () => {
    it("Should add required validator to word type control", () => {
      spyOn(form.controls.wordType, "addValidators")
      provider.addValidationTo(form);
      expect(form.controls.wordType.addValidators).toHaveBeenCalledOnceWith([Validators.required]);
    });

    it("Should add factory validator to english control", () => {
      spyOn(form.controls.english, "addValidators")
      provider.addValidationTo(form);
      expect(form.controls.english.addValidators).toHaveBeenCalledOnceWith([factoryValidator]);
    });

    it("Should add factory validator to german control", () => {
      spyOn(form.controls.german, "addValidators")
      provider.addValidationTo(form);
      expect(form.controls.german.addValidators).toHaveBeenCalledOnceWith([factoryValidator]);
    });
  });
});
