import { FormArray } from "@angular/forms";

export function validateIndex(index: number, formArray: FormArray<any>): void {
  if (index < 0) {
    throw new Error("Index may not be negative.");
  }

  if (index >= formArray.length) {
    throw new Error("Index exceeds the size of the list items form control array.")
  }
}
