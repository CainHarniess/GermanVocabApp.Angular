import { VocabList } from "../../../vocab/models";

export interface VocabListFormComponentMocks {
  router: any;
  listService: any;
  listFormBuilder: any;
  listItemFormBuilder: any;
  observableBuilderForMocks: any;
  observableBuilderForReal: any;
  list?: VocabList;
  route?: any;
}
