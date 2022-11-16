import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../core';
import { User } from '../shared/models';
import { ApplicationRoutePath } from '../shared/routing';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {
  constructor(private readonly router: Router,
    private readonly notificationService: NotificationService) {

  }

  public onLogIn(user: User | undefined): void {
    if (!user) {
      this.notificationService.error("Unable to log you in, bro.");
      return;
    }
    this.notificationService.success("Log-in successful.");
    this.router.navigate([ApplicationRoutePath.Root]);
  }
}
