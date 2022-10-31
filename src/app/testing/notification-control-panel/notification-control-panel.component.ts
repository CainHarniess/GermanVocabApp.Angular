import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlPanelComponent } from '..';
import { NotificationService } from '../../../core';

@Component({
  selector: 'testing-notification-control-panel',
  templateUrl: './notification-control-panel.component.html',
  styleUrls: ['../control-panel/control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationControlPanelComponent extends ControlPanelComponent {
  public constructor(private readonly notificationService: NotificationService) {
    super();
  }

  public showInformation(): void {
    this.notificationService.info("Here is some relevant information.");
  }

  public showSuccess(): void {
    this.notificationService.success("The operation was successful.");
  }

  public showWarning(): void {
    this.notificationService.warn("Careful now.");
  }

  public showError(): void {
    this.notificationService.error("That wasn't supposed to happen.");
  }
}
