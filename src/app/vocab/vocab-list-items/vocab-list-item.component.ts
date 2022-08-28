import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isNullOrUndefined } from '../../../utilities';
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

  public get isIrregular(): boolean {
    if (this.item.wordType === WordType.Verb) {
      return !isNullOrUndefined(this.item.thirdPersonPresent);
    }

    if (this.item.wordType === WordType.Adjective
      || this.item.wordType === WordType.Adverb) {
      return !isNullOrUndefined(this.item.comparative);
    } 

    return false;
  }
}
