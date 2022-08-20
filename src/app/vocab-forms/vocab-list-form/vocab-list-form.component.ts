import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { VocabList } from '../../vocab/models/vocab-list.interface';
import { VocabListService } from '../../vocab/services/vocab-list.service';
import { VocabListForm } from '../models/vocab-list-form.interface';
import { VocabListFormBuilder } from '../services/vocab-list-form-builder.service';
import { VocabListItemFormBuilder } from '../services/vocab-list-item-form-builder.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vocab-list-form',
  templateUrl: './vocab-list-form.component.html',
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [VocabListFormBuilder, VocabListItemFormBuilder]
})
export class VocabListFormComponent implements OnInit {
  private addVocabList?: Subscription;

  constructor(private vocabService: VocabListService, private router: Router,
    private listFormBuilder: VocabListFormBuilder,
    private listItemFormBuilder: VocabListItemFormBuilder) { }

  public get listItemsControl(): FormArray { return <FormArray<FormGroup>>this.vocabListForm.get("listItems")!; }

  public vocabListForm!: FormGroup<VocabListForm>;

  ngOnInit(): void {
    this.vocabListForm = this.listFormBuilder.build();
  }

  public addListItemControl(): void {
    this.listItemsControl.push(this.generateListItemControl());
  }

  private generateListItemControl(): FormGroup {
    return this.listItemFormBuilder.build();
  }

  public getListItemControl(index: number): FormGroup {
    this.listItemsControl.controls
    return <FormGroup>this.listItemsControl.get(`${index}`);
  }

  public removeListItemControl(index: number): void {
    if (index < 0) {
      console.error("Index may not be negative.")
      return;
    } else if (index >= this.listItemsControl.length) {
      console.error("Index exceeds the size of the list items form control array.")
      return;
    }
    console.info(`Removing form control at index ${ '' + index }.`);

    this.listItemsControl.controls.splice(index, 1);
  }

  public onFormSubmit(): void {
    const vocabList: VocabList = this.vocabListForm.value as VocabList;
    this.addVocabList = this.vocabService.add(vocabList)
      .subscribe(newListId => {
        this.router.navigate(["vocab", "vocab-lists"]);
      });
  }

  public ngOnDestroy(): void {
    this.addVocabList?.unsubscribe();
  }
}
