import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { VocabList } from '.././models/vocab-list.interface';
import { VocabListService } from '.././services/vocab-list.service';

import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-vocab-lists',
  templateUrl: './vocab-lists.component.html',
  styleUrls: ['./vocab-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListsComponent {

  constructor(private vocabListService: VocabListService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  public readonly vocabLists$: Observable<VocabList[]> = this.activatedRoute.data
    .pipe(
      map((data: Data) => data["resolvedVocabLists"]),
    );
}
