import { VocabListFormValidationProvider } from "../services";
import { RequiredStringLengthValidatorFactory } from "../validation";

export class ListFormValidationProviderFactory {
  public create(): VocabListFormValidationProvider {
    const validatorFactory: RequiredStringLengthValidatorFactory = new RequiredStringLengthValidatorFactory();
    return new VocabListFormValidationProvider(validatorFactory);
  }
}
