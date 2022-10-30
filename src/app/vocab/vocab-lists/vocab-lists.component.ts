import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { LogService } from '../../../core/logging';
import { MatSnackBarService } from '../../angular-material/snack-bar.service';

import { VocabList } from '.././models/vocab-list.interface';
import { ResolvedData } from '../models/data';

@Component({
  selector: 'app-vocab-lists',
  templateUrl: './vocab-lists.component.html',
  styleUrls: ['./vocab-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListsComponent {
  constructor(private readonly logger: LogService,
    private router: Router, private route: ActivatedRoute,
    private readonly notificationService: MatSnackBarService) {

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
      tap(() => this.logger.debug({ message: "Resolved Data", data: [this.vocabListsDisplay$.value] })),
  );

  public ngOnInit(): void {
    this.logger.trace({ message: `${VocabListsComponent.name} ngOnInit` });
  }

  public addList(): void {
    this.logger.trace({ message: `${VocabListsComponent.name} - addList` });
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  public editList(id: string): void {
    this.logger.trace({ message: `${VocabListsComponent.name} - editList` });
    this.router.navigate([id, "edit"], { relativeTo: this.route });
  }

  public viewList(id: string): void {
    this.logger.trace({ message: `${VocabListsComponent.name} - viewList` });
    this.router.navigate([id], { relativeTo: this.route });
  }

  public exportToJson(): void {
    this.logger.trace({ message: `${VocabListsComponent.name} - exportToJson` });
    this.showJson$.next(!this.showJson$.value);
    this.notificationService.error("Hi there.");
  }
}
