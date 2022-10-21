import { FormBuilder } from "@angular/forms";

export abstract class ModelFormBuilder {
  protected constructor(protected readonly formBuilder: FormBuilder) {

  }
}
