import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NounGender } from '../models/data/noun-gender.enum';

@Component({
  selector: 'app-vocab-list-item-form',
  templateUrl: './vocab-list-item-form.component.html',
  styleUrls: ['./vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListItemFormComponent {
  public readonly NounGender: typeof NounGender = NounGender;


  @Input() public parentForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  public get listItemsControl(): FormArray<FormGroup> { return <FormArray>this.parentForm.get("listItems")!; }

  public addListItemControl(): void {
    this.listItemsControl.push(this.generateListItemControl());
  }

  private generateListItemControl(): FormGroup {
    return this.fb.group({
      article: ['', Validators.required],
      english: ['', Validators.required],
      german: ['', Validators.required],
    });
  }

  public removeListItemControl(index: number): void {
    if (index < 0) {
      console.error("Index may not be negative.")
      return;
    } else if (index >= this.listItemsControl.length) {
      console.error("Index exceeds the size of the list items form control array.")
      return;
    }
    console.info(`Removing form control at index ${{ index }}.`);

    this.listItemsControl.controls.splice(index, 1);
  }

}
