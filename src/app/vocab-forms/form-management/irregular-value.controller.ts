import { FormGroup } from "@angular/forms";
import { WordTypeValueController } from ".";
import { VocabListItemForm } from "../models";

export abstract class IrregularValueController extends WordTypeValueController {
  public override setInitialValues(form: FormGroup<VocabListItemForm>): void {
    form.controls.isIrregular.setValue(false);
    this.setInitialdValuesProtected(form);
  }

  public override removeValues(form: FormGroup<VocabListItemForm>): void {
    const irregularControl = form.controls.isIrregular;
    const wasIrregular: boolean | null = irregularControl.value;
    irregularControl.setValue(null);
    this.removeValuesProtected(form);

    if (wasIrregular !== true) {
      return;
    }
    this.resetIrregularFollowFields(form);
  }

  protected abstract setInitialdValuesProtected(form: FormGroup<VocabListItemForm>): void;

  protected abstract removeValuesProtected(form: FormGroup<VocabListItemForm>): void;

  protected abstract resetIrregularFollowFields(form: FormGroup<VocabListItemForm>): void;
}
