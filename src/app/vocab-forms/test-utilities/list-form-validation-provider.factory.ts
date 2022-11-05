import { VocabListFormValidationProvider } from "../services";
import { RequiredStringLengthValidatorFactory, StringLengthValidatorFactory } from "../validation";

export class ListFormValidationProviderFactory {
  public create(): VocabListFormValidationProvider {
    const requiredValidatorFactory: RequiredStringLengthValidatorFactory = new RequiredStringLengthValidatorFactory();
    const optionalValidatorFactory: StringLengthValidatorFactory = new StringLengthValidatorFactory();
    return new VocabListFormValidationProvider(requiredValidatorFactory, optionalValidatorFactory);
  }
}
