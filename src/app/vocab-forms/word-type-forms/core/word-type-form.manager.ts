import { FormGroup } from "@angular/forms";
import { WordTypeValidationController, WordTypeValueController } from ".";
import { WordType } from "../../../vocab/models/data";
import { VocabListItemForm } from "../../models";

export abstract class WordTypeFormManager {
  public abstract get wordType(): WordType;

  public constructor(protected readonly validationController: WordTypeValidationController,
    protected readonly valueController: WordTypeValueController) {
  }

  public configureForm(form: FormGroup<VocabListItemForm>): void {
    this.validationController.addValidation(form);
    this.valueController.setInitialValues(form);
  }

  public removeConfiguration(form: FormGroup<VocabListItemForm>): void {
    this.validationController.removeValidation(form);
    this.valueController.removeValues(form);
  }
}
