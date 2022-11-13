import { RequiredStringLengthValidatorFactory, StringLengthValidatorFactory } from "../../../core/validation";
import { VocabListFormValidationProvider } from "../services";

export class ListFormValidationProviderFactory {
  public create(): VocabListFormValidationProvider {
    const requiredValidatorFactory: RequiredStringLengthValidatorFactory = new RequiredStringLengthValidatorFactory();
    const optionalValidatorFactory: StringLengthValidatorFactory = new StringLengthValidatorFactory();
    return new VocabListFormValidationProvider(requiredValidatorFactory, optionalValidatorFactory);
  }
}
