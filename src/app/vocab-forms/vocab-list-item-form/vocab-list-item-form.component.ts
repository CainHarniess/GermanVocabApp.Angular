import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { map, Observable, startWith, Subscription } from 'rxjs';
import { AbstractFormComponent } from '../../../core';
import { Null, Undefined } from '../../../core/types';
import { SingleSelectOption } from '../../forms/single-select/single-select-option.interface';
import { VocabListItem } from '../../vocab/models';

import { WordType } from '../../vocab/models/data/word-type.enum';
import { isIrregular } from '../../vocab/utilities';
import { VocabListForm } from '../models/vocab-list-form.interface';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';
import { WordTypeFormManagerFactory } from '../services/word-type-form-manager-factory';
import { RequiredWithLengthMessageProvider } from '../validation';
import { WordTypeFormManager } from '../word-type-forms/core';
import { wordTypeOptions } from './drop-down-options';

@Component({
  selector: 'app-vocab-list-item-form',
  templateUrl: './vocab-list-item-form.component.html',
  styleUrls: ['./vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WordTypeFormManagerFactory]
})
export class VocabListItemFormComponent extends AbstractFormComponent
  implements OnInit, OnDestroy {
  private validationChanges!: Subscription;
  private currentFormManager?: WordTypeFormManager;

  public readonly WordType: typeof WordType = WordType;
  public readonly dropDownOptions: SingleSelectOption<WordType>[] = wordTypeOptions;

  public wordType$!: Observable<WordType>;
  public validationChanges$!: Observable<WordType>;

  @Input() public parentForm!: FormGroup<VocabListForm>;
  @Input() public form!: FormGroup<VocabListItemForm>;
  @Input() public index!: number;
  @Input() public listItem?: VocabListItem;

  @Output() public remove = new EventEmitter<number>();
  @Output() public copy = new EventEmitter<number>();

  constructor(private formManagerFactory: WordTypeFormManagerFactory,
    private readonly errorMessageProvider: RequiredWithLengthMessageProvider) {
    super();
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
    controls.isIrregular.setValue(isIrregular(this.listItem));
  }

  private constructWordType$(listItem: Undefined<VocabListItem>,
    wordTypeControl: FormControl<Null<WordType>>): Observable<WordType> {
    return wordTypeControl.valueChanges
      .pipe(
        startWith(listItem?.wordType ?? null),
        map((val: any) => val as WordType),
      );
  }

  private updateFormConfiguration(wordType: WordType): void {
    if (this.currentFormManager) {
      //Check this is called?
      this.currentFormManager.removeConfiguration(this.form);
    }
    // and this?
    this.currentFormManager = this.formManagerFactory.create(wordType, this.form);
    // and this?
    this.currentFormManager.configureForm(this.form);
  }

  public get listItemsControl(): FormArray<FormGroup> {
    return <FormArray<FormGroup>>this.parentForm.get("listItems")!;
  }

  public copyControl(): void {
    this.copy.emit(this.index);
  }

  public removeControl(): void {
    //Check emit is called
    this.remove.emit(this.index);
  }

  public ngOnDestroy(): void {
    // Check unsubscribe is called.
    this.validationChanges.unsubscribe();
  }
}
