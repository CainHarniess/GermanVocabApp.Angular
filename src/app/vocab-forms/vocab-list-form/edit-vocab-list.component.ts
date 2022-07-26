import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { EMPTY, Observable } from 'rxjs';
import { NotificationService } from '../../../core';
import { NotWellDefinedError } from '../../../core/errors';

import { Undefined } from '../../../core/types';
import { ValidationErrorMessageProvider } from '../../../core/validation';
import { addOrAssign } from '../../../utilities';
import { VocabRoutePath } from '../../shared/routing';

import { VocabList, VocabListItem } from '../../vocab/models';
import { ResolvedData } from '../../vocab/models/data';
import { VocabService } from '../../vocab/services';
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

  constructor(router: Router, vocabService: VocabService,
    listFormBuilder: VocabListFormBuilder,
    listItemFormBuilder: VocabListItemFormBuilder, title$Builder: ListTitleObservableBuilder,
    errorMessageProvider: ValidationErrorMessageProvider, requiredIfTouched: ErrorStateMatcher,
    notificationService: NotificationService,
    private readonly route: ActivatedRoute) {
    super(router, vocabService, listFormBuilder, listItemFormBuilder, title$Builder,
      errorMessageProvider, requiredIfTouched, notificationService);
    const dataSnapshot: Data = this.route.snapshot.data;
    this.preEditList = dataSnapshot[ResolvedData.ResolvedList];
  }

  public override get editData(): Undefined<VocabList> { return this.preEditList; }

  public override ngOnInit(): void {
    super.ngOnInit();

    const controls = this.form.controls;
    this.title$ = this.title$Builder.build(this.preEditList.name, controls.name);
    this.form.patchValue(this.preEditList);

    const listItemsControl: FormArray<any> = controls.listItems;
    const initialListItems: VocabListItem[] = this.preEditList.listItems
    initialListItems.forEach((item: VocabListItem) => {
      const itemControl = this.listItemFormBuilder.build();
      listItemsControl.push(itemControl);
    });
  }

  public readonly placeholderWording$: Observable<string> = EMPTY;

  public override submit(): void {
    if (!this.preEditList.id) {
      throw new NotWellDefinedError(`Expected well-defined vocab list ID but value is ${this.preEditList.id}.`);
    }
    const list: VocabList = this.form.value as VocabList;
    const update = this.vocabService.update(this.preEditList.id, list)
      .subscribe(() => {
        this.displaySuccessMessage(true);
        this.router.navigate([`/${VocabRoutePath.Root}`, VocabRoutePath.VocabLists]);
      });

    this.subscriptions = addOrAssign(update, this.subscriptions);
  }
}
