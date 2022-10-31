import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OsirisComponent } from '../../../core';

@Component({
  selector: 'testing-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent extends OsirisComponent {
  @Input() public isExpanded: boolean = false;
}
