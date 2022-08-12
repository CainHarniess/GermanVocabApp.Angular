import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Gender } from '../../vocab/models/data/gender.enum';

@Component({
  selector: 'app-vocab-list-item-form',
  templateUrl: './vocab-list-item-form.component.html',
  styleUrls: ['./vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListItemFormComponent {
  public readonly Gender: typeof Gender = Gender;

  @Input() public parentForm!: FormGroup;
  @Input() public form!: FormGroup;
  @Input() public index!: number;

  @Output() public removeListItem = new EventEmitter<number>();

  public get listItemsControl(): FormArray<FormGroup> { return <FormArray<FormGroup>>this.parentForm.get("listItems")!; }

  public removeListItemControl(index: number): void {
    this.removeListItem.emit(index);
  }
}
