import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActionRowComponent } from '../core';

@Component({
  selector: 'testing-success-action-row',
  templateUrl: './success-action-row.component.html',
  styleUrls: ['../core/action-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessActionRowComponent extends ActionRowComponent {

}
