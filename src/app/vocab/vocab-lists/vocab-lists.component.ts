import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ResolvedData } from '../models/data/resolved-data.enum';

import { VocabList } from '.././models/vocab-list.interface';

@Component({
  selector: 'app-vocab-lists',
  templateUrl: './vocab-lists.component.html',
  styleUrls: ['./vocab-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  public readonly showJson$ = new BehaviorSubject<boolean>(false);
  public readonly jsonButtonLabel$ = this.showJson$
    .pipe(
      map((val: boolean) => val ? "Hide JSON" : "Show JSON"),
    );

  public readonly vocabListsDisplay$ = new BehaviorSubject<VocabList[]>([]);
  public readonly vocabLists$: Observable<VocabList[]> = this.route.data
    .pipe(
      map((data: Data) => data[ResolvedData.ResolvedLists]),
      tap((data: VocabList[]) => this.vocabListsDisplay$.next(data)),
    );

  public addList(): void {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  public editList(id: string): void {
    this.router.navigate([id, "edit"], { relativeTo: this.route });
  }

  public viewList(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

  public exportToJson(): void {
    this.showJson$.next(!this.showJson$.value);
  }
}
