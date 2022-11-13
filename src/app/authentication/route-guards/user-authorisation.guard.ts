import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NotificationService } from '../../../core';
import { ApplicationRoutePath } from '../../shared/routing';
import { AuthenticationService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class UserAuthorisationGuard implements CanActivate {
  public constructor(private router: Router,
    private readonly authenticationService: AuthenticationService,
    private readonly notificationService: NotificationService) {

  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticationService.isAuthenticated) {
      return true;
    }
    this.notificationService.error("Access to this area requires authentication.");
    this.router.navigate([ApplicationRoutePath.Landing]);
    return false;
  }
}
