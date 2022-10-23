import { VocabListFormValidationProvider } from "../services";
import { RequiredWithLengthRangeValidatorFactory } from "../validation";

export class ListFormValidationProviderFactory {
  public create(): VocabListFormValidationProvider {
    const validatorFactory: RequiredWithLengthRangeValidatorFactory = new RequiredWithLengthRangeValidatorFactory();
    return new VocabListFormValidationProvider(validatorFactory);
  }
}
