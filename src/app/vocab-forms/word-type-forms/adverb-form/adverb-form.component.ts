import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModifierWordTypeForm } from '../modifier-word-type-form';

@Component({
  selector: 'adverb-form',
  templateUrl: './adverb-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdverbFormComponent extends ModifierWordTypeForm {

}
