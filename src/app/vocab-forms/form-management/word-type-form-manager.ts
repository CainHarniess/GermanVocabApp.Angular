import { FormGroup } from "@angular/forms";
import { WordTypeValidationManager, WordTypeValueController } from ".";
import { WordType } from "../../vocab/models/data";
import { VocabListItemForm } from "../models";

export abstract class WordTypeFormManager {
  public abstract get wordType(): WordType;

  public constructor(protected readonly validationManager: WordTypeValidationManager,
    protected readonly valueController: WordTypeValueController) {
  }

  public configureForm(form: FormGroup<VocabListItemForm>): void {
    this.validationManager.addValidation(form);
    this.valueController.setInitialValues(form);
  }

  public removeConfiguration(form: FormGroup<VocabListItemForm>): void {
    this.validationManager.removeValidation(form);
    this.valueController.removeValues(form);
  }
}
