import { FormGroup } from "@angular/forms";

import { VocabListItemForm } from "../models/vocab-list-item-form.interface";

export abstract class WordTypeFormManager {
  protected readonly controls: VocabListItemForm;

  constructor(protected readonly form: FormGroup<VocabListItemForm>) {
    this.controls = form.controls;
  }

  public abstract configureForm(): void;
  public abstract removeConfiguration(): void;
}
