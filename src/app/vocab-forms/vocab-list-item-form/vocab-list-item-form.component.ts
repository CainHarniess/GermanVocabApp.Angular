import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { map, Observable } from 'rxjs';

import { WordType } from '../../vocab/models/data/word-type.enum';
import { DropDownOptions } from './drop-down-options.class';

@Component({
  selector: 'app-vocab-list-item-form',
  templateUrl: './vocab-list-item-form.component.html',
  styleUrls: ['./vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListItemFormComponent implements OnInit {
  public readonly WordType: typeof WordType = WordType;
  public readonly dropDownOptions: typeof DropDownOptions = DropDownOptions;

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
