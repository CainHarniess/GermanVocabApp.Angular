import { ValidatorFn, Validators } from "@angular/forms";
import { ItemValidationProvider } from "../item-validation.provider";

describe(ItemValidationProvider.name, () => {
  let provider: ItemValidationProvider;
  let validatorFactory: any;
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
    validatorFactory = {
      create: { }
    };
    spyOn(validatorFactory, "create").and.returnValue(factoryValidator);
    provider = new ItemValidationProvider(validatorFactory);
  });

  describe("addValidationTo", () => {
    it("Should add required validator to word type control", () => {
      spyOn(form.controls.wordType, "addValidators")
      provider.addValidationTo(form);
      expect(form.controls.wordType.addValidators).toHaveBeenCalledOnceWith([Validators.required]);
    });

    it("Should add required validator to word type control", () => {
      spyOn(form.controls.english, "addValidators")
      provider.addValidationTo(form);
      expect(form.controls.english.addValidators).toHaveBeenCalledOnceWith([factoryValidator]);
    });

    it("Should add required validator to word type control", () => {
      spyOn(form.controls.german, "addValidators")
      provider.addValidationTo(form);
      expect(form.controls.german.addValidators).toHaveBeenCalledOnceWith([factoryValidator]);
    });
  });
});
