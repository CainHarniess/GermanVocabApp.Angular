import { Observable } from "rxjs";

export interface MockVocabListForm {
  controls: {
    name: { valueChanges: Observable<any> };
    description: { valueChanges: Observable<any> };
    listItems: {
      length: number;
      push: () => void;
      controls: any[];
    },
    value: any
  }
}
