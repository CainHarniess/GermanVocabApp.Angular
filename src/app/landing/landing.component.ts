import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../../core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {

  constructor(private readonly router: Router,
    private readonly notificationService: NotificationService) {

  }

  ngOnInit(): void {
  }

  public onLogIn(result: boolean): void {
    if (!result) {
      this.notificationService.error("Unable to log you in, bro.");
      return;
    }
    this.notificationService.success("Log-in successful.");
    this.router.navigate(['logged-in']);
  }
}
