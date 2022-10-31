import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OsirisComponent } from '../../../core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent extends OsirisComponent {
  
}
