import { FormArray, FormControl, FormGroup } from "@angular/forms";

import { VocabListItemForm } from "./vocab-list-item-form.interface";

export interface VocabListForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  listItems: FormArray<FormGroup<VocabListItemForm>>
}
