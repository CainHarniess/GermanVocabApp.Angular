import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VocabList } from '../../vocab/models/vocab-list.interface';
import { VocabListService } from '../../vocab/services/vocab-list.service';

@Component({
  selector: 'app-vocab-list-form',
  templateUrl: './vocab-list-form.component.html',
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListFormComponent implements OnInit {
  private addVocabList?: Subscription;

  @Output() public onFormSubmitted = new EventEmitter<VocabList>()

  constructor(private fb: FormBuilder, private vocabService: VocabListService,
    private router: Router) { }

  public get listItemsControl(): FormArray { return <FormArray>this.vocabListForm.get("listItems")!; }

  public vocabListForm!: FormGroup;

  ngOnInit(): void {
    this.vocabListForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      listItems: this.fb.array([])
    });
  }

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

  public getListItemsControl(index: number): FormGroup {
    this.listItemsControl.controls
    return <FormGroup>this.listItemsControl.get(`${index}`);
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
