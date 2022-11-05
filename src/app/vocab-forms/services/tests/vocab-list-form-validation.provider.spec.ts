import { ValidatorFn, Validators } from "@angular/forms";
import { VocabListFormValidationProvider } from "..";
import { descriptionMaxLength, descriptionMinLength, nameMaxLength, nameMinLength } from "../../../vocab/models/data/constraints/vocab-list-data-constraints";

describe(VocabListFormValidationProvider.name, () => {
  let provider: VocabListFormValidationProvider;
  let mockRequiredFactory: any = {
    create: {},
  };
  let mockOptionalFactory: any = {
    create: {},
  };
  let requiredFactoryCreateSpy: any;
  let optionalFactoryCreateSpy: any;
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
  let requiredValidator: (minLength: number) => ValidatorFn = Validators.minLength;
  let optionalValidator: (minLength: number) => ValidatorFn = Validators.maxLength;

  beforeEach(() => {
    requiredFactoryCreateSpy = spyOn(mockRequiredFactory, "create").and.returnValue(requiredValidator);
    optionalFactoryCreateSpy = spyOn(mockOptionalFactory, "create").and.returnValue(optionalValidator);
    provider = new VocabListFormValidationProvider(mockRequiredFactory, mockOptionalFactory);
  });

  describe("provide", () => {
    it("Should add factory validator to name control", () => {
      spyOn(form.controls.name, "addValidators")
      provider.provide(form);
      expect(form.controls.name.addValidators).toHaveBeenCalledOnceWith(requiredValidator);
    });

    it("Should add factory validator to description control", () => {
      spyOn(form.controls.description, "addValidators")
      provider.provide(form);
      expect(form.controls.description.addValidators).toHaveBeenCalledOnceWith(optionalValidator);
    });

    it("Build the validators with the correct values", () => {
      provider.provide(form);
      expect(requiredFactoryCreateSpy).toHaveBeenCalledOnceWith(nameMinLength, nameMaxLength);
      expect(optionalFactoryCreateSpy).toHaveBeenCalledOnceWith(descriptionMinLength, descriptionMaxLength);
    });
  });
});
