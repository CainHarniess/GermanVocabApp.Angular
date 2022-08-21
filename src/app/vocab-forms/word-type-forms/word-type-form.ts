import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

import { DropDownOptions } from './drop-down-options.class';

@Component({ template: '' })
export abstract class WordTypeForm {
  public readonly dropDownOptions: typeof DropDownOptions = DropDownOptions;

  @Input() public form!: FormGroup<VocabListItemForm>;
  @Input() public index!: number;

  public get formRoot(): FormGroup { return this.form.root as FormGroup; }
}
