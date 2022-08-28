import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { VocabList } from '.././models/vocab-list.interface';

import { BehaviorSubject, map, Observable, tap } from 'rxjs';
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

  private readonly showJson$ = new BehaviorSubject<boolean>(false);
  public readonly jsonButtonLabel$ = this.showJson$
    .pipe(
      map((val: boolean) => val ? "Hide JSON" : "Show JSON"),
    );

  public readonly vocabListsDisplay$ = new BehaviorSubject<VocabList[]>([]);
  public readonly vocabLists$: Observable<VocabList[]> = this.activatedRoute.data
    .pipe(
      map((data: Data) => data[ResolvedData.ResolvedLists]),
      tap((data: VocabList[]) => this.vocabListsDisplay$.next(data)),
  );


  public exportToJson(): void {
    this.showJson$.next(!this.showJson$.value);
  }
}
