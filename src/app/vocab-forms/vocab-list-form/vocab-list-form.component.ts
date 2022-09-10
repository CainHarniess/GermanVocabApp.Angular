import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { VocabList } from '../../vocab/models/vocab-list.interface';
import { VocabListService } from '../../vocab/services/vocab-list.service';
import { VocabListForm } from '../models/vocab-list-form.interface';
import { VocabListFormBuilder } from '../services/vocab-list-form-builder.service';
import { VocabListItemFormBuilder } from '../services/vocab-list-item-form-builder.service';

import { BehaviorSubject, debounceTime, filter, map, Observable, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-vocab-list-form',
  templateUrl: './vocab-list-form.component.html',
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [VocabListFormBuilder, VocabListItemFormBuilder]
})
export class VocabListFormComponent implements OnInit {
  //Stryker disable StringLiteral, ObjectLiteral : Coverage not required.
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
    10: "You're on your own now.",
    11: "",
  }
  //Stryker restore StringLiteral, ObjectLiteral

  public readonly listItemControlCount$ = new BehaviorSubject<number>(0);
  public readonly placeholderWording$: Observable<string> = this.listItemControlCount$
    .pipe(
      filter((val: number) => val <= 11),
      map((count: number) => this.wordingDict[count]),
    );

  constructor(private vocabService: VocabListService, private router: Router,
    private listFormBuilder: VocabListFormBuilder,
    private listItemFormBuilder: VocabListItemFormBuilder) { }

  public get listItemsControl(): FormArray { return this.vocabListForm.controls.listItems; }

  public vocabListForm!: FormGroup<VocabListForm>;
  public listTitle$!: Observable<string>;
  public descriptionLength$!: Observable<number>;

  ngOnInit(): void {
    this.vocabListForm = this.listFormBuilder.build();
    this.listTitle$ = this.vocabListForm.controls.name.valueChanges
      .pipe(
        startWith("New vocab list"),
        debounceTime(300),
        map((val: string | null) => (!val || val === "") ? "New vocab list" : val),
    );
    this.descriptionLength$ = this.vocabListForm.controls.description.valueChanges
      .pipe(
        map((val: string | null) => val ? val.length : 0),
        filter((result: number) => result > 150),
      );
  }

  public addListItemControl(): void {
    this.listItemsControl.push(this.generateListItemControl());
    this.listItemControlCount$.next(this.listItemsControl.length);
  }

  private generateListItemControl(): FormGroup {
    return this.listItemFormBuilder.build();
  }

  public getListItemControl(index: number): FormGroup {
    // Mayeb can't test this one.
    return <FormGroup>this.listItemsControl.get(`${index}`);
  }

  public removeListItemControl(index: number): void {
    if (index < 0) {
      throw new Error("Index may not be negative.");
    } else if (index >= this.listItemsControl.length) {
      throw new Error("Index exceeds the size of the list items form control array.")
    }
    this.listItemsControl.controls.splice(index, 1);
    this.listItemControlCount$.next(this.listItemsControl.length);
  }

  private subscriptions?: Subscription;
  public submit(): void {
    const vocabList: VocabList = this.vocabListForm.value as VocabList;
    this.subscriptions = this.vocabService.add(vocabList)
      .subscribe(newListId => {
        this.router.navigate(["/vocab", "vocab-lists"]);
      });
  }

  public ngOnDestroy(): void {
    this.subscriptions?.unsubscribe()
  }
}
