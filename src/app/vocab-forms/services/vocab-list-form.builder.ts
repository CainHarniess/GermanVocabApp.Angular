import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ModelFormBuilder } from '../../shared/services/model-form-builder.class';
import { VocabList, VocabListItem } from '../../vocab/models';
import { VocabListForm, VocabListItemForm } from '../models';
import { VocabListFormValidationProvider } from './vocab-list-form-validation.provider';
import { VocabListItemFormBuilder } from './vocab-list-item-form-builder.service';

@Injectable()
export class VocabListFormBuilder extends ModelFormBuilder {

  constructor(formBuilder: FormBuilder, private readonly listItemFormBuilder: VocabListItemFormBuilder,
    private readonly validationProvider: VocabListFormValidationProvider) {
    super(formBuilder);
  }

  public build(): FormGroup<VocabListForm> {
    const form: FormGroup<VocabListForm> = this.formBuilder.group<VocabListForm>({
      name: this.formBuilder.control<string | null>(null),
      description: this.formBuilder.control<string | null>(null),
      listItems: this.formBuilder.array<FormGroup<VocabListItemForm>>([]),
    });
    return this.validationProvider.provide(form);
  }

  public buildFromModel(list: VocabList): FormGroup<VocabListForm> {
    const form: FormGroup<VocabListForm> = this.build();
    form.patchValue(list);
    this.patchListItems(form, list.listItems)
    return form;
  }

  private patchListItems(form: FormGroup<VocabListForm>,
    listItems: VocabListItem[]): void {
    listItems.forEach((listItem: VocabListItem) => {
      const listItemForm: FormGroup<VocabListItemForm> = this.listItemFormBuilder
        .buildFromModel(listItem);
        form.controls.listItems.push(listItemForm)
    });
  }
}
