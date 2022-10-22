import { VocabListFormValidationProvider } from "../services";
import { RequiredWithLengthRangeValidatorFactory } from "../vocab-list-form/required-with-length-range-validator";

export class ListFormValidationProviderFactory {
  public create(): VocabListFormValidationProvider {
    const validatorFactory: RequiredWithLengthRangeValidatorFactory = new RequiredWithLengthRangeValidatorFactory();
    return new VocabListFormValidationProvider(validatorFactory);
  }
}
