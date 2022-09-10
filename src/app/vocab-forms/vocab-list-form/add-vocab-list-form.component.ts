import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { filter, map, Observable } from 'rxjs';

import { Undefined } from '../../../core/types';
import { VocabList } from '../../vocab/models/vocab-list.interface';
import { VocabListService } from '../../vocab/services/vocab-list.service';
import { ListTitleObservableBuilder, VocabListFormBuilder, VocabListItemFormBuilder } from '../services';
import { AbstractVocabListFormComponent } from './abstract-vocab-list-form';

@Component({
  selector: 'app-vocab-list-form',
  templateUrl: './vocab-list-form.component.html',
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddVocabListFormComponent extends AbstractVocabListFormComponent {
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

  constructor(router: Router, vocabService: VocabListService,
    listFormBuilder: VocabListFormBuilder,
    listItemFormBuilder: VocabListItemFormBuilder, title$Builder: ListTitleObservableBuilder) {
    super(router, vocabService, listFormBuilder, listItemFormBuilder, title$Builder);
  }

  public override get preEditData(): Undefined<VocabList> { return undefined; }

  public override ngOnInit(): void {
    super.ngOnInit();
    const controls = this.vocabListForm.controls;
    this.title$ = this.title$Builder.build("New vocab list", controls.name);
  }

  public readonly placeholderWording$: Observable<string> = this.listItemControlCount$
    .pipe(
      filter((val: number) => val <= 11),
      map((count: number) => this.wordingDict[count]),
    );

  public override submit(): void {
    const vocabList: VocabList = this.vocabListForm.value as VocabList;
    this.subscriptions = this.vocabService.add(vocabList)
      .subscribe(newListId => {
        this.router.navigate(["/vocab", "vocab-lists"]);
      });
  }
}
