import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadRequestCommand, ClientErrorCommand, UnauthorisedCommand } from '../commands';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  public constructor(public readonly clientErrorCommand: ClientErrorCommand,
    public readonly unathorisedCommand: UnauthorisedCommand,
    public readonly badRequestCommand: BadRequestCommand) {

  }
}
