import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter, map, Observable, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private router: Router) {

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
