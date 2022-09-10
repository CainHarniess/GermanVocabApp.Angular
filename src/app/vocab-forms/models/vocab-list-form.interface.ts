import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { VocabListItemForm } from ".";


export interface VocabListForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  listItems: FormArray<FormGroup<VocabListItemForm>>
}
