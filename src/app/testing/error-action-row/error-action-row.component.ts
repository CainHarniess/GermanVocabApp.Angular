import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActionRowComponent } from '../core';

@Component({
  selector: 'testing-error-action-row',
  templateUrl: './error-action-row.component.html',
  styleUrls: ['../core/action-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorActionRowComponent extends ActionRowComponent {

}
