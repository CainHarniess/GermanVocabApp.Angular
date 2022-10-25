import { ValidatorFn, Validators } from "@angular/forms";
import { VocabListFormValidationProvider } from "..";
import { descriptionMaxLength, descriptionMinLength, nameMaxLength, nameMinLength } from "../../../vocab/models/data/constraints/vocab-list-data-constraints";
import { ItemValidationProvider } from "../item-validation.provider";

describe(ItemValidationProvider.name, () => {
  let provider: VocabListFormValidationProvider;
  let validatorFactory: any = {
    create: {},
  };
  let factoryCreateSpy: any;
  // TODO: Refactor declaration shared with item validation provider into a shared builder or something.
  let form: any = {
    controls: {
      name: {
        addValidators: function () { },
        updateValueAndValidity: function () { },
      },
      description: {
        addValidators: function () { },
        updateValueAndValidity: function () { },
      },
    }
  };
  let factoryValidator: (minLength: number) => ValidatorFn = Validators.minLength;

  beforeEach(() => {
    factoryCreateSpy = spyOn(validatorFactory, "create").and.returnValue(factoryValidator);
    provider = new VocabListFormValidationProvider(validatorFactory);
  });

  describe("provide", () => {
    it("Should add factory validator to name control", () => {
      spyOn(form.controls.name, "addValidators")
      provider.provide(form);
      expect(form.controls.name.addValidators).toHaveBeenCalledOnceWith(factoryValidator);
    });

    it("Should add factory validator to description control", () => {
      spyOn(form.controls.description, "addValidators")
      provider.provide(form);
      expect(form.controls.description.addValidators).toHaveBeenCalledOnceWith(factoryValidator);
    });

    it("Build the validators with the correct values", () => {
      provider.provide(form);
      expect(factoryCreateSpy).toHaveBeenCalledTimes(2);
      expect(factoryCreateSpy).toHaveBeenCalledWith(nameMinLength, nameMaxLength);
      expect(factoryCreateSpy).toHaveBeenCalledWith(descriptionMinLength, descriptionMaxLength);
    });
  });
});
