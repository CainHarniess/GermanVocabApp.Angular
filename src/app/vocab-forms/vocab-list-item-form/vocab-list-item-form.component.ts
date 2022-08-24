import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { map, Observable, Subscription } from 'rxjs';

import { WordType } from '../../vocab/models/data/word-type.enum';
import { WordTypeFormManager } from '../form-management';
import { VocabListForm } from '../models/vocab-list-form.interface';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';
import { WordTypeFormManagerFactory } from '../services/form-manager-factory';
import { DropDownOptions } from './drop-down-options.class';

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
  public readonly dropDownOptions: typeof DropDownOptions = DropDownOptions;

  public wordType$!: Observable<WordType>;
  public validationChanges$!: Observable<WordType>;

  @Input() public parentForm!: FormGroup<VocabListForm>;
  @Input() public form!: FormGroup<VocabListItemForm>;
  @Input() public index!: number;

  @Output() public removeListItem = new EventEmitter<number>();

  constructor(private formManagerFactory: WordTypeFormManagerFactory) {

  }

  public ngOnInit(): void {
    // Can we test this?
    this.wordType$ = this.form.controls.wordType.valueChanges
      .pipe(
        map((val: any) => val as WordType),
    );

    this.validationChanges$ = this.wordType$;
    // Check subsribe is called?
    this.validationChanges = this.validationChanges$.subscribe(wordType => this.updateNounValidation(wordType));
  }

  private updateNounValidation(wordType: WordType): void {
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
