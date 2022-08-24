import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModulesListComponent {

}
