import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { VocabList } from '../models/vocab-list.interface';

@Component({
  selector: 'vocab-list-card',
  templateUrl: './vocab-list-card.component.html',
  styleUrls: ['./vocab-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListCardComponent {

  @Input() vocabList?: VocabList;
}
