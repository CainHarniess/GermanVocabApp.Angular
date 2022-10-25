import { VocabList } from "../../../vocab/models";

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
}
