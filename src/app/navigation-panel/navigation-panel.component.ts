import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AuthenticationService } from '../authentication/services';
import { ApplicationRoutePath, TestingRoutePath, VocabRoutePath } from '../shared/routing';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPanelComponent implements OnInit {
  public readonly AppRoutePath: typeof ApplicationRoutePath = ApplicationRoutePath;
  public readonly VocabRoutePath: typeof VocabRoutePath = VocabRoutePath;
  public readonly TestingRoutePath: typeof TestingRoutePath = TestingRoutePath;

  public constructor(private readonly authenticationService: AuthenticationService) {

  }

  private _isLoggedIn$!: Observable<boolean>;
  public get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$;
  }

  ngOnInit(): void {
    this._isLoggedIn$ = of(this.authenticationService.isAuthenticated);
  }
}
