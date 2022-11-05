import { Directive, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { BehaviorSubject, filter, map, Observable, Subject, Subscription } from 'rxjs';
import { NotificationService } from "../../../core";

import { Undefined } from "../../../core/types";
import { validateIndex } from "../../../utilities";
import { VocabList } from "../../vocab/models";

import { VocabListService } from '../../vocab/services';
import { VocabListForm, VocabListItemForm } from "../models";
import { ListTitleObservableBuilder, VocabListFormBuilder, VocabListItemFormBuilder } from '../services';
import { RequiredIfTouchedErrorStateMatcher, ValidationErrorMessageProvider } from "../validation";

@Directive()
export abstract class AbstractVocabListFormComponent implements OnInit, OnDestroy {
  protected readonly destroy$ = new Subject<boolean>();

  public readonly listItemControlCount$ = new BehaviorSubject<number>(0);

  protected constructor(protected readonly router: Router,
    protected readonly vocabService: VocabListService,
    protected readonly listFormBuilder: VocabListFormBuilder,
    protected readonly listItemFormBuilder: VocabListItemFormBuilder,
    protected readonly title$Builder: ListTitleObservableBuilder,
    private readonly errorMessageProvider: ValidationErrorMessageProvider,
    public readonly requiredIfTouched: RequiredIfTouchedErrorStateMatcher,
    protected readonly notificationService: NotificationService) {

  }

  public abstract get editData(): Undefined<VocabList>;

  public form!: FormGroup<VocabListForm>;
  public title$!: Observable<string>;
  public descriptionLength$!: Observable<number>;
  public nameValidationMessage$!: Observable<string | null>;
  public descriptionValidationMessage$!: Observable<string | null>;

  public ngOnInit(): void {
    this.form = this.listFormBuilder.build();
    const controls = this.form.controls;

    this.nameValidationMessage$ = this.errorMessageProvider.provideFor(controls.name);

    let descriptionControl: FormControl<string | null> = controls.description;
    this.descriptionValidationMessage$ = this.errorMessageProvider.provideFor(descriptionControl);

    this.descriptionLength$ = descriptionControl.valueChanges
      .pipe(
        map((val: string | null) => val ? val.length : 0),
        filter((result: number) => result > 75),
      );
  }

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

  protected displaySuccessMessage(isEdit: boolean): void {
    const listName: string = this.form.controls.name.value!;
    const editMode: string = isEdit ? "updated" : "added";
    const message: string = `${listName} ${editMode} successfully.`;
    this.notificationService.success(message);
  }

  protected subscriptions?: Subscription;

  public ngOnDestroy(): void {
    this.subscriptions?.unsubscribe()
  }
}
