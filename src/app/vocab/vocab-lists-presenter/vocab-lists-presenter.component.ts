import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VocabList } from '../models/vocab-list.interface';

@Component({
  selector: 'vocab-lists-presenter',
  templateUrl: './vocab-lists-presenter.component.html',
  styleUrls: ['./vocab-lists-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListsPresenterComponent {
  @Input() public vocabLists!: VocabList[];
}
