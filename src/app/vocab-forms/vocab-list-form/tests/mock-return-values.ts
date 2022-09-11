import { Observable } from "rxjs";

export interface MockReturnValues {
  newListId$: Observable<string>,
  listForm: any,
  title$: Observable<string>,
  updatedList$: Observable<any>;
}
