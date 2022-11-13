import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter, map, Observable, startWith } from 'rxjs';
import { NotificationService } from '../../core';
import { AuthenticationService } from '../authentication/services';
import { User } from '../shared/models';
import { ApplicationRoutePath } from '../shared/routing';

@Component({
  selector: 'logged-in-app',
  templateUrl: './logged-in-app.component.html',
  styleUrls: ['./logged-in-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedInAppComponent implements OnInit {
  constructor(private readonly router: Router,
    private readonly authenticationService: AuthenticationService,
    private readonly notificationService: NotificationService) {

  }

  public isLoading$!: Observable<boolean>;

  public ngOnInit(): void {
    this.isLoading$ = this.router.events
      .pipe(
        filter((e: Event) => this.isRelevantNavigationEvent(e)),
        map((e: Event) => {
          if (this.isNavigationStart(e)) {
            return true;
          }
          return false;
        }),
        startWith(false),
      )
  }

  public onLogOut(): void {
    this.authenticationService.logOut()
      .subscribe((loggedOutUser: User | undefined) => {
        const salutationWithLeadingSpace: string = (loggedOutUser) ? ` ${loggedOutUser.firstName}` : "";

        if (!loggedOutUser) {
          this.notificationService.error(`Sorry${salutationWithLeadingSpace}, unable to log you out.`);
          return;
        }
        this.router.navigate([ApplicationRoutePath.Landing]);
        this.notificationService.success(`See you later,${salutationWithLeadingSpace}!`);
      });
  }

  private isRelevantNavigationEvent(e: Event): boolean {
    return e instanceof NavigationStart
      || e instanceof NavigationEnd
      || e instanceof NavigationCancel
      || e instanceof NavigationError;
  }

  private isNavigationStart(e: Event): boolean {
    return e instanceof NavigationStart;
  }
}
