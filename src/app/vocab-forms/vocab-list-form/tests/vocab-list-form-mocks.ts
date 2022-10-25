import { VocabList } from "../../../vocab/models";
import { ValidationErrorMessageProvider } from "../../validation";

export interface VocabListFormComponentMocks {
  router: any;
  vocabService: any;
  listFormBuilder: any;
  itemFormBuilder: any;
  observableBuilderForMocks: any;
  observableBuilderForReal: any;
  list?: VocabList;
  listForm?: any;
  route?: any;
  listItemWordingProvider?: any;
  validationProvider: any;
  errorStateMatcher: any;
  errorMessageProvider: ValidationErrorMessageProvider;
  itemValidationProvider: any;
}
