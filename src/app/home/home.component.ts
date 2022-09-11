import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { map, Observable, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public isLoading$!: Observable<boolean>;

  constructor(private router: Router) {

  }

  public ngOnInit(): void {
    this.isLoading$ = this.router.events
      .pipe(
        tap((e: Event) => console.log(e)),
        map((e: Event) => e instanceof NavigationStart),
        startWith(false),
        tap((result: boolean) => console.log(result)),
    )
  }
}
