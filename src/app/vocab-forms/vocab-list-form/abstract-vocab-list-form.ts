import { Directive, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { BehaviorSubject, filter, map, Observable, Subscription } from 'rxjs';

import { Undefined } from "../../../core/types";
import { VocabList } from "../../vocab/models";

import { VocabListService } from '../../vocab/services';
import { VocabListForm } from "../models";
import { ListTitleObservableBuilder, VocabListFormBuilder, VocabListItemFormBuilder } from '../services';

@Directive()
export abstract class AbstractVocabListFormComponent implements OnInit, OnDestroy {
  public readonly listItemControlCount$ = new BehaviorSubject<number>(0);

  protected constructor(protected router: Router,
    protected vocabService: VocabListService,
    protected listFormBuilder: VocabListFormBuilder,
    protected listItemFormBuilder: VocabListItemFormBuilder, protected title$Builder: ListTitleObservableBuilder) {

  }

  public abstract get editData(): Undefined<VocabList>;

  public form!: FormGroup<VocabListForm>;
  public title$!: Observable<string>;
  public descriptionLength$!: Observable<number>;

  public ngOnInit(): void {
    this.form = this.listFormBuilder.build();
    const controls = this.form.controls;
    this.descriptionLength$ = controls.description.valueChanges
      .pipe(
        map((val: string | null) => val ? val.length : 0),
        filter((result: number) => result > 150),
      );
  }

  public get listItemsControl(): FormArray {
    return this.form.controls.listItems;
  }

  public addListItemControl(): void {
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

  public removeListItemControl(index: number): void {
    if (index < 0) {
      throw new Error("Index may not be negative.");
    } else if (index >= this.listItemsControl.length) {
      throw new Error("Index exceeds the size of the list items form control array.")
    }
    this.listItemsControl.controls.splice(index, 1);
    this.listItemControlCount$.next(this.listItemsControl.length);
  }

  public abstract submit(): void;

  protected subscriptions?: Subscription;

  public ngOnDestroy(): void {
    this.subscriptions?.unsubscribe()
  }
}
