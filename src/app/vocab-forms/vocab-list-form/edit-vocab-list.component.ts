import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EMPTY, Observable } from 'rxjs';
import { VocabList } from '../../vocab/models';
import { ResolvedData } from '../../vocab/models/data';

import { VocabListService } from '../../vocab/services';
import { VocabListFormBuilder, VocabListItemFormBuilder } from '../services';
import { AbstractVocabListFormComponent } from './abstract-vocab-list-form';

@Component({
  selector: 'app-edit-vocab-list',
  templateUrl: 'vocab-list-form.component.html',
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditVocabListComponent extends AbstractVocabListFormComponent {
  constructor(router: Router, vocabService: VocabListService,
    listFormBuilder: VocabListFormBuilder,
    listItemFormBuilder: VocabListItemFormBuilder, private route: ActivatedRoute) {
    super(router, vocabService, listFormBuilder, listItemFormBuilder);
  }

  protected initialiseForm(): void {
    const list: VocabList = this.route.snapshot.data[ResolvedData.ResolvedList];
    this.vocabListForm = this.listFormBuilder.buildFromModel(list);
    this.vocabListForm.updateValueAndValidity();
  }

  public readonly placeholderWording$: Observable<string> = EMPTY;

  public submit(): void {
    throw new Error('Method not implemented.');
  }
}
