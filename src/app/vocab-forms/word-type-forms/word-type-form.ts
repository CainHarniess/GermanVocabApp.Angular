import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime, filter, map, Observable } from 'rxjs';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

import { DropDownOptions } from './drop-down-options.class';

@Component({ template: '' })
export abstract class WordTypeForm implements OnInit {
  public readonly dropDownOptions: typeof DropDownOptions = DropDownOptions;

  public hasPreposition$!: Observable<boolean>;

  @Input() public form!: FormGroup<VocabListItemForm>;
  @Input() public index!: number;

  public get formRoot(): FormGroup { return this.form.root as FormGroup; }

  public ngOnInit(): void {
    this.hasPreposition$ = this.form.controls.preposition!.valueChanges
      .pipe(
        debounceTime(100),
        filter((val: NullableString) => val !== null && val !== undefined),
        map((val: NullableString) => val as string),
        map((val: string) => val.length > 0),
      );
  }
}

export type NullableString = string | null;
