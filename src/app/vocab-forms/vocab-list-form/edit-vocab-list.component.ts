import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { EMPTY, Observable } from 'rxjs';

import { Undefined } from '../../../core/types';

import { VocabList, VocabListItem } from '../../vocab/models';
import { ResolvedData } from '../../vocab/models/data'
import { VocabListService } from '../../vocab/services';
import { ListTitleObservableBuilder, VocabListFormBuilder, VocabListItemFormBuilder } from '../services';
import { AbstractVocabListFormComponent } from './abstract-vocab-list-form';

@Component({
  selector: 'app-edit-vocab-list',
  templateUrl: 'vocab-list-form.component.html',
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditVocabListComponent extends AbstractVocabListFormComponent {
  public readonly preEditList: VocabList;

  constructor(router: Router, vocabService: VocabListService,
    listFormBuilder: VocabListFormBuilder,
    listItemFormBuilder: VocabListItemFormBuilder, title$Builder: ListTitleObservableBuilder,
    private route: ActivatedRoute) {
    super(router, vocabService, listFormBuilder, listItemFormBuilder, title$Builder);
    const dataSnapshot: Data = this.route.snapshot.data;
    this.preEditList = dataSnapshot[ResolvedData.ResolvedList];
  }

  public override get preEditData(): Undefined<VocabList> { return this.preEditList; }

  public override ngOnInit(): void {
    super.ngOnInit();

    const controls = this.vocabListForm.controls;
    this.title$ = this.title$Builder.build(this.preEditList.name, controls.name);
    this.vocabListForm.patchValue(this.preEditList);

    const listItemsControl = controls.listItems;
    const initialListItems = this.preEditList.listItems
    initialListItems.forEach((item: VocabListItem) => {
      const itemControl = this.listItemFormBuilder.build();
      listItemsControl.push(itemControl);
    });
  }

  public readonly placeholderWording$: Observable<string> = EMPTY;

  public submit(): void {
    throw new Error('Method not implemented.');
  }
}
