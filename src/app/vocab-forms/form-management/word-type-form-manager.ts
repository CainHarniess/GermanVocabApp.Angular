import { FormGroup } from "@angular/forms";
import { WordType } from "../../vocab/models/data/word-type.enum";

import { VocabListItemForm } from "../models/vocab-list-item-form.interface";

export abstract class WordTypeFormManager {
  protected readonly controls: VocabListItemForm;

  public abstract get wordType(): WordType;

  constructor(protected readonly form: FormGroup<VocabListItemForm>) {
    this.controls = form.controls;
  }

  public abstract configureForm(): void;
  public abstract removeConfiguration(): void;
}
