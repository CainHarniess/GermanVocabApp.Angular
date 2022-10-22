import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Undefined } from '../../../core/types';
import { VocabList } from '../../vocab/models/vocab-list.interface';
import { VocabListService } from '../../vocab/services/vocab-list.service';
import { VocabListForm } from '../models';
import { ListItemWordingObservableProvider, ListTitleObservableBuilder, VocabListFormBuilder, VocabListItemFormBuilder } from '../services';
import { RequiredWithLengthMessageProvider } from '../validation';
import { AbstractVocabListFormComponent } from './abstract-vocab-list-form';

@Component({
  selector: 'app-vocab-list-form',
  templateUrl: './vocab-list-form.component.html',
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ListItemWordingObservableProvider]
})
export class AddVocabListFormComponent extends AbstractVocabListFormComponent {
  constructor(router: Router, vocabService: VocabListService,
    listFormBuilder: VocabListFormBuilder, listItemFormBuilder: VocabListItemFormBuilder,
    title$Builder: ListTitleObservableBuilder,
    errorMessageProvider: RequiredWithLengthMessageProvider, requiredIfTouched: ErrorStateMatcher,
    private listItemWording$Provider: ListItemWordingObservableProvider,
    ) {
    super(router, vocabService, listFormBuilder, listItemFormBuilder, title$Builder,
      errorMessageProvider, requiredIfTouched);
  }

  public override get editData(): Undefined<VocabList> { return undefined; }

  public override ngOnInit(): void {
    super.ngOnInit();
    const controls: VocabListForm = this.form.controls;
    this.title$ = this.title$Builder.build("New vocab list", controls.name);
    this.placeholderWording$ = this.listItemWording$Provider
      .provide(this.listItemControlCount$);
  }

  public placeholderWording$!: Observable<string>;

  public override submit(): void {
    const vocabList: VocabList = this.form.value as VocabList;
    this.subscriptions = this.vocabService.add(vocabList)
      .subscribe(newListId => {
        this.router.navigate(["/vocab", "vocab-lists"]);
      });
  }
}
