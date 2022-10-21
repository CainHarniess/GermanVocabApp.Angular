import { Directive, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Router } from "@angular/router";

import { BehaviorSubject, debounceTime, filter, map, Observable, Subject, Subscription } from 'rxjs';

import { Undefined } from "../../../core/types";
import { validateIndex } from "../../../utilities";
import { VocabList } from "../../vocab/models";

import { VocabListService } from '../../vocab/services';
import { VocabListForm, VocabListItemForm } from "../models";
import { ListTitleObservableBuilder, VocabListFormBuilder, VocabListItemFormBuilder } from '../services';
import { RequiredIfTouchedErrorStateMatcher } from "./required-if-touched-error-state-matcher";

@Directive()
export abstract class AbstractVocabListFormComponent implements OnInit, OnDestroy {

  protected readonly destroy$ = new Subject<boolean>();

  public readonly listItemControlCount$ = new BehaviorSubject<number>(0);

  protected constructor(protected router: Router,
    protected readonly vocabService: VocabListService,
    protected readonly listFormBuilder: VocabListFormBuilder,
    protected readonly listItemFormBuilder: VocabListItemFormBuilder,
    protected readonly title$Builder: ListTitleObservableBuilder) {

  }

  public abstract get editData(): Undefined<VocabList>;

  public form!: FormGroup<VocabListForm>;
  public title$!: Observable<string>;
  public descriptionLength$!: Observable<number>;
  public nameValidationMessage$!: Observable<string>;

  public ngOnInit(): void {
    this.form = this.listFormBuilder.build();
    const controls = this.form.controls;
    this.descriptionLength$ = controls.description.valueChanges
      .pipe(
        map((val: string | null) => val ? val.length : 0),
        filter((result: number) => result > 150),
      );

    let nameControl: FormControl<string | null> = this.form.controls.name;
    this.nameValidationMessage$ = nameControl.valueChanges
      .pipe(
        filter((_: string | null) => nameControl.errors !== null),
        map((_: string | null) => nameControl.errors!["message"])
      );
  }

  public readonly myMatcher: ErrorStateMatcher = new RequiredIfTouchedErrorStateMatcher();

  public get listItemsControl(): FormArray {
    return this.form.controls.listItems;
  }

  public addListItemControl(): void {
    // TODO: Fix undefined reading exception when adding new form control.
    this.listItemsControl.push(this.generateListItemControl());
    this.listItemControlCount$.next(this.listItemsControl.length);
  }

  protected generateListItemControl(): FormGroup {
    return this.listItemFormBuilder.build();
  }

  // TODO: Add tests.
  public getListItemControl(index: number): FormGroup {
    return <FormGroup>this.listItemsControl.get(`${index}`);
  }

  public copyListItemControl(index: number): void {
    validateIndex(index, this.listItemsControl);

    const controlToCopy: AbstractControl<VocabListItemForm> = this.listItemsControl.at(index);
    const controlValue: VocabListItemForm = controlToCopy.value;

    const newControl: FormGroup<VocabListItemForm> = this.listItemFormBuilder.buildFromFormGroup(controlValue);

    this.listItemsControl.insert(index, newControl);
    this.listItemControlCount$.next(this.listItemsControl.length);
  }

  public removeListItemControl(index: number): void {
    validateIndex(index, this.listItemsControl);
    this.listItemsControl.removeAt(index)
    this.listItemControlCount$.next(this.listItemsControl.length);
  }

  public abstract submit(): void;

  protected subscriptions?: Subscription;

  public ngOnDestroy(): void {
    this.subscriptions?.unsubscribe()
  }
}
