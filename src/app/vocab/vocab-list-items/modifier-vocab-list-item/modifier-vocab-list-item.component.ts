import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VocabListItemComponent } from '../vocab-list-item.component';

@Component({
  selector: 'modifier-vocab-list-item',
  templateUrl: './modifier-vocab-list-item.component.html',
  styleUrls: ['../vocab-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModifierVocabListItemComponent extends VocabListItemComponent {

}
