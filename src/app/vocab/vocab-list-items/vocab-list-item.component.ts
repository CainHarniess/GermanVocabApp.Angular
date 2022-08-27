import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { WordType } from '../models/data/word-type.enum';
import { VocabListItem } from '../models/vocab-list-item.interface';

@Component({
  selector: 'vocab-list-item',
  templateUrl: './vocab-list-item.component.html',
  styleUrls: ['./vocab-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VocabListItemComponent {
  public readonly WordType: typeof WordType = WordType;
  @Input() public item!: VocabListItem;
}
