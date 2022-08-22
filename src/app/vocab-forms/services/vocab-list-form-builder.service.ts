import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModelFormBuilder } from '../../shared/services/model-form-builder.class';
import { VocabListForm } from '../models/vocab-list-form.interface';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

@Injectable()
export class VocabListFormBuilder extends ModelFormBuilder {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  public build(): FormGroup<VocabListForm> {
    return this.formBuilder.group<VocabListForm>({
      name: this.formBuilder.control<string | null>(null, Validators.required),
      description: this.formBuilder.control<string | null>(null),
      listItems: this.formBuilder.array<FormGroup<VocabListItemForm>>([]),
    });
  }
}
