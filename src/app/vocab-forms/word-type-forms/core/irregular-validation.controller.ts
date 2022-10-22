import { FormGroup, Validators } from "@angular/forms";
import { WordTypeValidationController } from ".";
import { VocabListItemForm } from "../../models";

export abstract class IrregularValidationController extends WordTypeValidationController {
  public addValidation(form: FormGroup<VocabListItemForm>): void {
    const controls: VocabListItemForm = form.controls;

    this.addValidator(Validators.required, controls.isIrregular);

    this.addValidationProtected(controls);
    this.addIrregularFollowFieldValidation(controls);
  }

  public removeValidation(form: FormGroup<VocabListItemForm>): void {
    const controls: VocabListItemForm = form.controls;

    this.removeValidator(Validators.required, controls.isIrregular);

    this.removeValidationProtected(controls);
    this.removeIrregularFollowFieldValidation(controls);
  }

  protected abstract addValidationProtected(controls: VocabListItemForm): void;

  protected abstract addIrregularFollowFieldValidation(controls: VocabListItemForm): void;

  protected abstract removeValidationProtected(controls: VocabListItemForm): void;

  protected abstract removeIrregularFollowFieldValidation(controls: VocabListItemForm): void;
}
