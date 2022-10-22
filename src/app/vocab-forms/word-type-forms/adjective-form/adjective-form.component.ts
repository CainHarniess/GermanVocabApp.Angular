import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModifierFormComponent } from '../core/modifier-form.component';

@Component({
  selector: 'adjective-form',
  templateUrl: './adjective-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdjectiveFormComponent extends ModifierFormComponent {

}
