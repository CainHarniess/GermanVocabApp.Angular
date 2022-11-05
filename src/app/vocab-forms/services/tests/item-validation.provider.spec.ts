import { ValidatorFn, Validators } from "@angular/forms";
import { wordMaxLength, wordMinLength } from "../../../vocab/models/data/constraints/item-data-constraints";
import { ItemValidationProvider } from "../item-validation.provider";
import { createMockItemForm, createMockvalidatorVisitor } from "./testing.utilities";

describe(ItemValidationProvider.name, () => {
  let provider: ItemValidationProvider;
  let validatorFactory: any = {
    create: {}
  };
  let factoryCreateSpy: any;
  let form: any = createMockItemForm();
  let factoryValidator: (minLength: number) => ValidatorFn = Validators.minLength;
  let validatorVisitor: any;

  beforeEach(() => {
    factoryCreateSpy = spyOn(validatorFactory, "create").and.returnValue(factoryValidator);
    validatorVisitor = createMockvalidatorVisitor();
    spyOn(validatorVisitor, "addValidator");
    provider = new ItemValidationProvider(validatorVisitor, validatorFactory);
  });

  describe("constructor", () => {
    it("Build the validators with the correct values", () => {
      expect(factoryCreateSpy).toHaveBeenCalledTimes(2);
      expect(factoryCreateSpy).toHaveBeenCalledWith(wordMinLength, wordMaxLength);
    });
  });

  describe("addValidationTo", () => {
    it("Should add required validator to word type control", () => {
      provider.addValidationTo(form);
      expect(validatorVisitor.addValidator).toHaveBeenCalledWith(Validators.required, form.controls.wordType);
    });

    it("Should add factory validator to english control", () => {
      provider.addValidationTo(form);
      expect(validatorVisitor.addValidator).toHaveBeenCalledWith(factoryValidator, form.controls.english);
    });

    it("Should add factory validator to german control", () => {
      provider.addValidationTo(form);
      expect(validatorVisitor.addValidator).toHaveBeenCalledWith(factoryValidator, form.controls.german);
    });
  });
});
