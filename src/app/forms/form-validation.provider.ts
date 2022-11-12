import { FormGroup } from "@angular/forms";
import { FormModel } from ".";

export abstract class FormValidationProvider<TFormModel extends FormModel<TFormModel> = any> {
  public abstract provide(form: FormGroup<TFormModel>): FormGroup<TFormModel>;
}
