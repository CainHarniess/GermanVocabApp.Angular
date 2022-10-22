import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { debounceTime, filter, map, Observable, of, startWith, Subject, tap } from 'rxjs';
import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { VocabListItem } from '../../../vocab/models';
import { isIrregular } from '../../../vocab/utilities';
import { VocabListItemForm } from '../../models';
import { ValidationErrorMessageProvider } from '../../validation';
import { DropDownOptions } from '../drop-down-options.class';

export type NullableString = string | null;

@Directive()
export abstract class WordTypeFormComponent implements OnInit, OnDestroy {
  protected destroy$ = new Subject<boolean>();

  private readonly displayPrepositionCase = new Subject<boolean>();

  protected irregularControls: FormControl<string | null>[] = [];

  public readonly dropDownOptions: typeof DropDownOptions = DropDownOptions;
  public displayPrepositionCase$: Observable<boolean> = this.displayPrepositionCase.asObservable();

  protected constructor(protected controlAvailabilityService: ControlAvailabilityService,
    private readonly errorMessageProvider: ValidationErrorMessageProvider) {

  }

  @Input() public form!: FormGroup<VocabListItemForm>;
  @Input() public index!: number;
  @Input() public listItem?: VocabListItem;

  public isIrregular$!: Observable<boolean>;
  public hasPreposition$!: Observable<boolean>;

  public get formRoot(): FormGroup { return this.form.root as FormGroup; }

  public germanErrorMessage$: Observable<string | null> = of(null);
  public prepositionErrorMessage$: Observable<string | null> = of(null);
  public englishErrorMessage$: Observable<string | null> = of(null);

  public ngOnInit(): void {
    const controls = this.form.controls;
    this.isIrregular$ = controls.isIrregular!.valueChanges
      .pipe(
        startWith(isIrregular(this.listItem)),
        map(val => val ?? false)
      );

    this.hasPreposition$ = controls.preposition!.valueChanges
      .pipe(
        startWith(this.listItem?.preposition ?? null),
        debounceTime(250),
        filter((val: NullableString) => val !== null && val !== undefined),
        map((val: NullableString) => val as string),
        map((val: string) => val.length > 0),
        tap((result: boolean) => this.displayPrepositionCase.next(result)),
    );

    this.germanErrorMessage$ = this.errorMessageProvider.provideFor(controls.german);
    this.prepositionErrorMessage$ = this.errorMessageProvider.provideFor(controls.preposition);
    this.englishErrorMessage$ = this.errorMessageProvider.provideFor(controls.english);
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
