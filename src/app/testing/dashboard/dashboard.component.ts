import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { BadRequestCommand, ClientErrorCommand, NoContentCommand, UnauthorisedCommand } from '../commands';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnDestroy {
  public constructor(public readonly noContentCommand: NoContentCommand,
    public readonly clientErrorCommand: ClientErrorCommand,
    public readonly unathorisedCommand: UnauthorisedCommand,
    public readonly badRequestCommand: BadRequestCommand) {

  }

  ngOnDestroy(): void {
    this.clientErrorCommand.unsubscribe();
    this.unathorisedCommand.unsubscribe();
    this.badRequestCommand.unsubscribe();
  }
}
