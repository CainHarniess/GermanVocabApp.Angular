import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { map, Observable } from 'rxjs';
import { SingleSelectOption } from '../../forms/single-select/single-select-option.interface';

import { WordType } from '../../vocab/models/data/word-type.enum';

@Component({
  selector: 'app-vocab-list-item-form',
  templateUrl: './vocab-list-item-form.component.html',
  styleUrls: ['./vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListItemFormComponent implements OnInit {
  public readonly WordType: typeof WordType = WordType;
  public readonly wordTypeOptions: SingleSelectOption<WordType>[] = [{
    value: WordType.Noun,
    label: "Noun",
  }, {
    value: WordType.Verb,
    label: "Verb",
  }, {
    value: WordType.Adjective,
    label: "Adjective",
  }, {
    value: WordType.Adverb,
    label: "Adverb",
  }];

  public wordType$!: Observable<WordType>;

  @Input() public parentForm!: FormGroup;
  @Input() public form!: FormGroup;
  @Input() public index!: number;

  @Output() public removeListItem = new EventEmitter<number>();

  public ngOnInit(): void {
    this.wordType$ = this.form.get("wordType")!.valueChanges
      .pipe(
        map((val: any) => val as WordType),
      );
  }

  public get listItemsControl(): FormArray<FormGroup> { return <FormArray<FormGroup>>this.parentForm.get("listItems")!; }

  public removeListItemControl(index: number): void {
    this.removeListItem.emit(index);
  }
}
