import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FixedPlurality } from '../models/data/fixed-plurality.enum';
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
  public readonly FixedPlurality: typeof FixedPlurality = FixedPlurality;
  @Input() public item!: VocabListItem;
}
