import { AfterContentInit, Directive, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { BehaviorSubject, debounceTime, filter, map, Observable, startWith, Subscription } from 'rxjs';

import { VocabListService } from '../../vocab/services';
import { VocabListForm } from "../models";
import { VocabListFormBuilder, VocabListItemFormBuilder } from '../services';

@Directive()
export abstract class AbstractVocabListFormComponent implements OnInit, OnDestroy {
  public readonly listItemControlCount$ = new BehaviorSubject<number>(0);

  protected constructor(protected router: Router,
    protected vocabService: VocabListService,
    protected listFormBuilder: VocabListFormBuilder,
    protected listItemFormBuilder: VocabListItemFormBuilder) {

  }

  public vocabListForm!: FormGroup<VocabListForm>;
  public listTitle$!: Observable<string>;
  public descriptionLength$!: Observable<number>;

  public ngOnInit(): void {
    this.initialiseForm();
    this.listTitle$ = this.vocabListForm.controls.name.valueChanges
      .pipe(
        startWith("New vocab list"),
        debounceTime(300),
        map((val: string | null) => (!val || val === "") ? "New vocab list" : val),
      );
    this.descriptionLength$ = this.vocabListForm.controls.description.valueChanges
      .pipe(
        map((val: string | null) => val ? val.length : 0),
        filter((result: number) => result > 150),
      );
  }

  protected abstract initialiseForm(): void;

  public get listItemsControl(): FormArray {
    return this.vocabListForm.controls.listItems;
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
