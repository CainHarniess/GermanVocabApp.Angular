import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ResolvedData } from '../models/data/resolved-data.enum';
import { VocabList } from '../models/vocab-list.interface';

@Component({
  selector: 'app-vocab-list',
  templateUrl: './vocab-list.component.html',
  styleUrls: ['./vocab-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListComponent {
  constructor(private activatedRoute: ActivatedRoute) {

  }

  public readonly vocabList$: Observable<VocabList> = this.activatedRoute.data
    .pipe(
      map((data: Data) => data[ResolvedData.ResolvedList]),
  );

  public addVocabListItem(): void {

  }
}
