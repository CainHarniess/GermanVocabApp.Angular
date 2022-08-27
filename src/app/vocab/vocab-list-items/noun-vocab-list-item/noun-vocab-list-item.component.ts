import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VocabListItemComponent } from '../vocab-list-item.component';

@Component({
  selector: 'noun-vocab-list-item',
  templateUrl: './noun-vocab-list-item.component.html',
  styleUrls: ['../vocab-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NounVocabListItemComponent extends VocabListItemComponent {

}
