import { FormGroup } from "@angular/forms";
import { WordType } from "../../vocab/models/data";

import { VocabListItemForm } from "../models/vocab-list-item-form.interface";
import { WordTypeValidationManager } from "./word-type-validation.manager";

export abstract class WordTypeFormManager {
  public abstract get wordType(): WordType;

  constructor(protected readonly validationManager: WordTypeValidationManager) {
  }

  public abstract configureForm(form: FormGroup<VocabListItemForm>): void;
  public abstract removeConfiguration(form: FormGroup<VocabListItemForm>): void;
}
