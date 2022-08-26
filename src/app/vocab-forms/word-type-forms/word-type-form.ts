import { Directive, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { debounceTime, filter, map, Observable, Subject, tap } from 'rxjs';

import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

import { DropDownOptions } from './drop-down-options.class';

export type NullableString = string | null;

@Directive()
export abstract class WordTypeForm implements OnInit {
  private readonly displayPrepositionCase = new Subject<boolean>();

  public readonly dropDownOptions: typeof DropDownOptions = DropDownOptions;
  public displayPrepositionCase$: Observable<boolean> = this.displayPrepositionCase.asObservable();

  public isIrregular$!: Observable<boolean>;
  public hasPreposition$!: Observable<boolean>;

  @Input() public form!: FormGroup<VocabListItemForm>;
  @Input() public index!: number;

  public get formRoot(): FormGroup { return this.form.root as FormGroup; }

  public ngOnInit(): void {
    this.isIrregular$ = this.form.controls.isIrregular!.valueChanges
      .pipe(
        map(val => val ?? false),
      );

    this.hasPreposition$ = this.form.controls.preposition!.valueChanges
      .pipe(
        debounceTime(250),
        filter((val: NullableString) => val !== null && val !== undefined),
        map((val: NullableString) => val as string),
        map((val: string) => val.length > 0),
        tap((result: boolean) => this.displayPrepositionCase.next(result)),
    );
  }
}
