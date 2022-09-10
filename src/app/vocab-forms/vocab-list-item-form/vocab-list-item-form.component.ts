import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { map, Observable, Subscription, startWith } from 'rxjs';
import { Null, Undefined } from '../../../core/types';
import { SingleSelectOption } from '../../forms/single-select/single-select-option.interface';
import { VocabListItem } from '../../vocab/models';

import { WordType } from '../../vocab/models/data/word-type.enum';
import { WordTypeFormManager } from '../form-management';
import { VocabListForm } from '../models/vocab-list-form.interface';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';
import { WordTypeFormManagerFactory } from '../services/form-manager-factory';
import { wordTypeOptions } from './drop-down-options';

@Component({
  selector: 'app-vocab-list-item-form',
  templateUrl: './vocab-list-item-form.component.html',
  styleUrls: ['./vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WordTypeFormManagerFactory]
})
export class VocabListItemFormComponent implements OnInit, OnDestroy {
  private validationChanges!: Subscription;
  private currentFormManager?: WordTypeFormManager;

  public readonly WordType: typeof WordType = WordType;
  public readonly dropDownOptions: SingleSelectOption<WordType>[] = wordTypeOptions;

  public wordType$!: Observable<WordType>;
  public validationChanges$!: Observable<WordType>;

  @Input() public parentForm!: FormGroup<VocabListForm>;
  @Input() public form!: FormGroup<VocabListItemForm>;
  @Input() public index!: number;
  @Input() public listItem?: VocabListItem | undefined;

  @Output() public removeListItem = new EventEmitter<number>();

  constructor(private formManagerFactory: WordTypeFormManagerFactory) {

  }

  public ngOnInit(): void {
    // Can we test this?
    const controls: VocabListItemForm = this.form.controls;
    this.wordType$ = this.constructWordType$(this.listItem, controls.wordType);

    this.validationChanges$ = this.wordType$;
    // Check subscribe is called?
    this.validationChanges = this.validationChanges$.subscribe(wordType => {
      this.updateFormConfiguration(wordType)
    });

    if (!this.listItem) {
      return;
    }
    this.form.patchValue(this.listItem);
  }

  private constructWordType$(listItem: Undefined<VocabListItem>, wordTypeControl: FormControl<Null<WordType>>): Observable<WordType> {
    if (!listItem) {
      return wordTypeControl.valueChanges
        .pipe(
          map((val: any) => val as WordType),
        );
    }
    return wordTypeControl.valueChanges
      .pipe(
        startWith(listItem.wordType),
        map((val: any) => val as WordType),
      );
   }

  private updateFormConfiguration(wordType: WordType): void {
    if (this.currentFormManager) {
      //Check this is called?
      this.currentFormManager.removeConfiguration();
    }
    // and this?
    this.currentFormManager = this.formManagerFactory.create(wordType, this.form);
    // and this?
    this.currentFormManager.configureForm();
  }

  public get listItemsControl(): FormArray<FormGroup> {
    return <FormArray<FormGroup>>this.parentForm.get("listItems")!;
  }

  public removeListItemControl(index: number): void {
    //Check emit is called
    this.removeListItem.emit(index);
  }

  public ngOnDestroy(): void {
    // Check unsubscribe is called.
    this.validationChanges.unsubscribe();
  }
}
