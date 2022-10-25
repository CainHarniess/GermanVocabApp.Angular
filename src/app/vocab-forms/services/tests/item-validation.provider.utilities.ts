import { FormGroup } from "@angular/forms";
import { VocabListItemForm } from "../../models";

export function createMockItemValidationProvider(): any {
  return {
    addValidationTo: (form: FormGroup<VocabListItemForm>) => { },
  }
}
