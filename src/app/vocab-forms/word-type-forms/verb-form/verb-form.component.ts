import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WordTypeForm } from '../word-type-form';

@Component({
  selector: 'verb-form',
  templateUrl: './verb-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerbFormComponent extends WordTypeForm {

}
