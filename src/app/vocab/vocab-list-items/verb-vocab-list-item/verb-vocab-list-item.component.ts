import { ChangeDetectionStrategy, Component } from '@angular/core';
import { isNullOrUndefined } from '../../../../utilities';
import { VocabListItemComponent } from '../vocab-list-item.component';

@Component({
  selector: 'verb-vocab-list-item',
  templateUrl: './verb-vocab-list-item.component.html',
  styleUrls: ['../vocab-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerbVocabListItemComponent extends VocabListItemComponent {
  public get isIrregular(): boolean {
    return !isNullOrUndefined(this.item.thirdPersonPresent);
  }
}
