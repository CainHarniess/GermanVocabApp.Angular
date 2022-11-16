import { AbstractControl } from "@angular/forms";

export type FormModel<TFormModel> = {
  [K in keyof TFormModel]: AbstractControl<any>;
};
