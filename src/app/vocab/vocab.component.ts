import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, tap, pipe } from 'rxjs';
import { VocabList } from './models/vocab-list.interface';
import { VocabService } from './vocab.service';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabComponent {

  constructor(private vocabListService: VocabService) { }

  public readonly vocabLists$: Observable<VocabList[]> = this.vocabListService.get();
}
