import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { VocabList } from '.././models/vocab-list.interface';

import { map, Observable } from 'rxjs';
import { ResolvedData } from '../models/data/resolved-data.enum';

@Component({
  selector: 'app-vocab-lists',
  templateUrl: './vocab-lists.component.html',
  styleUrls: ['./vocab-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListsComponent {

  constructor(private activatedRoute: ActivatedRoute) {

  }

  public readonly vocabLists$: Observable<VocabList[]> = this.activatedRoute.data
    .pipe(
      map((data: Data) => data[ResolvedData.ResolvedLists]),
    );
}
