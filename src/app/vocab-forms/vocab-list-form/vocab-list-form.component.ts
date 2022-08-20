import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Case, ReflexiveCase } from '../../vocab/models/data/case.enum';
import { FixedPlurality } from '../../vocab/models/data/fixed-plurality.enum';
import { Gender } from '../../vocab/models/data/gender.enum';
import { WordType } from '../../vocab/models/data/word-type.enum';
import { VocabList } from '../../vocab/models/vocab-list.interface';
import { VocabListService } from '../../vocab/services/vocab-list.service';
import { VocabListForm } from '../models/vocab-list-form.interface';
import { VocabListItemForm } from '../models/vocab-list-item-form.interface';

@Component({
  selector: 'app-vocab-list-form',
  templateUrl: './vocab-list-form.component.html',
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListFormComponent implements OnInit {
  private addVocabList?: Subscription;

  constructor(private fb: FormBuilder, private vocabService: VocabListService,
    private router: Router) { }

  public get listItemsControl(): FormArray { return <FormArray<FormGroup>>this.vocabListForm.get("listItems")!; }

  public vocabListForm!: FormGroup<VocabListForm>;

  ngOnInit(): void {
    this.vocabListForm = this.fb.group<VocabListForm>({
      name: this.fb.control<string | null>(null, Validators.required),
      description: this.fb.control<string | null>(null, Validators.required),
      listItems: this.fb.array<FormGroup<VocabListItemForm>>([]),
    });
  }

  public addListItemControl(): void {
    this.listItemsControl.push(this.generateListItemControl());
  }

  private generateListItemControl(): FormGroup {
    return this.fb.group<VocabListItemForm>({
      wordType: this.fb.control<WordType | null>(null),
      isWeakMasculineNoun: this.fb.control<boolean | null>(null),
      reflexiveCase: this.fb.control<ReflexiveCase | null>(null),
      isSeparable: this.fb.control<boolean | null>(null),
      isTransitive: this.fb.control<boolean | null>(null),
      thirdPersonPresent: this.fb.control<string | null>(null),
      thirdPersonImperfect: this.fb.control<string | null>(null),
      auxiliaryVerb: this.fb.control(null),
      perfect: this.fb.control<string | null>(null),
      gender: this.fb.control<Gender | null>(null),
      german: new FormControl<string | null>(null),
      plural: this.fb.control<string | null>(null),
      preposition: this.fb.control<string | null>(null),
      prepositionCase: this.fb.control<Case | null>(null),
      comparative: this.fb.control<string | null>(null),
      superlative: this.fb.control<string | null>(null),
      english: this.fb.control<string | null>(null),
      fixedPlurality: this.fb.control<FixedPlurality | null>(null),
    });
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
