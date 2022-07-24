import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VocabList } from '../models/vocab-list.interface';

@Component({
  selector: 'vocab-lists',
  templateUrl: './vocab-lists.component.html',
  styleUrls: ['./vocab-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListsComponent {
  @Input() public vocabLists?: VocabList[];
}
