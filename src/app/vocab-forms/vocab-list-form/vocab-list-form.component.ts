import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { VocabList } from '../../vocab/models/vocab-list.interface';
import { VocabListService } from '../../vocab/services/vocab-list.service';
import { VocabListForm } from '../models/vocab-list-form.interface';
import { VocabListFormBuilder } from '../services/vocab-list-form-builder.service';
import { VocabListItemFormBuilder } from '../services/vocab-list-item-form-builder.service';

import { BehaviorSubject, filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-vocab-list-form',
  templateUrl: './vocab-list-form.component.html',
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [VocabListFormBuilder, VocabListItemFormBuilder]
})
export class VocabListFormComponent implements OnInit {
  private readonly listItemControlCount = new BehaviorSubject<number>(0);
  private readonly wordingDict: { [key: number]: string } = {
    0: "Why not add something, sugar?",
    1: "Ooh yeah. You like that?",
    2: "Give me some more, baby.",
    3: "I see someone's thirsty...",
    4: "Thirsty for vocab",
    5: "Okay now, let's maybe calm down a bit.",
    6: "You've had enough.",
    7: "You're scaring me.",
    8: "I can't watch you do this to yourself.",
    9: "I'm leaving.",
    10: "You're on you're own now.",
    11: "",
  }

  private addVocabList?: Subscription;

  public readonly listItemControlCount$: Observable<number> = this.listItemControlCount.asObservable();
  public readonly placeholderWording$: Observable<string> = this.listItemControlCount$
    .pipe(
      filter((val: number) => val <= 11),
      map((count: number) => this.wordingDict[count]),
    );

  constructor(private vocabService: VocabListService, private router: Router,
    private listFormBuilder: VocabListFormBuilder,
    private listItemFormBuilder: VocabListItemFormBuilder) { }

  public get listItemsControl(): FormArray { return <FormArray<FormGroup>>this.vocabListForm.get("listItems")!; }

  public vocabListForm!: FormGroup<VocabListForm>;

  ngOnInit(): void {
    // Check function is called
    // Check vocabListForm property has expected value
    this.vocabListForm = this.listFormBuilder.build();
  }

  public addListItemControl(): void {
    // Check expected control is in the list?? nah, that requires testing FormArray
    this.listItemsControl.push(this.generateListItemControl());
    // Test that the count has increase (via the observable rather than the private field).
    this.listItemControlCount.next(this.listItemsControl.length);
  }

  private generateListItemControl(): FormGroup {
    //Check that the the expected function is called.
    return this.listItemFormBuilder.build();
  }

  public getListItemControl(index: number): FormGroup {
    // Mayeb can't test this one.
    return <FormGroup>this.listItemsControl.get(`${index}`);
  }

  public removeListItemControl(index: number): void {
    if (index < 0) {
    // Check an exception is thrown.
      //Update to throw exception.
      console.error("Index may not be negative.")
      return;
    } else if (index >= this.listItemsControl.length) {
    // Check an exception is thrown.
      //Update to throw exception.
      console.error("Index exceeds the size of the list items form control array.")
      return;
    }
    // Check control count has decreased.
    // Check expected control has been removed.
    this.listItemsControl.controls.splice(index, 1);
    this.listItemControlCount.next(this.listItemsControl.length);
  }

  public onFormSubmit(): void {
    const vocabList: VocabList = this.vocabListForm.value as VocabList;
    // Check vocab list service method is called with correct ID.
    //console.log(vocabList);
    //return;

    this.addVocabList = this.vocabService.add(vocabList)
      .subscribe(newListId => {
        // Check router navigation is done correctly?
        this.router.navigate(["vocab", "vocab-lists"]);
      });

    // Can we not unsubscribe using the below??
    //const addVocabListSubsc = this.vocabService.add(vocabList)
    //  .subscribe(newListId => {
    //  // Check router navigation is done correctly?
    //    addVocabListSubsc.unsubscribe();
    //  this.router.navigate(["vocab", "vocab-lists"]);
    //});
  }

  public ngOnDestroy(): void {
    // Check that the subscription is removed
    // Ensure the mock builder has done it's shit.
    this.addVocabList?.unsubscribe();
  }
}
