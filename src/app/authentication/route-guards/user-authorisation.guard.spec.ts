import { TestBed } from '@angular/core/testing';
import { NavigationExtras, Router } from '@angular/router';
import { NotificationService } from '../../../core';
import { AuthenticationService } from '../services';

import { UserAuthorisationGuard } from './user-authorisation.guard';


fdescribe('UserAuthorisationGuard', () => {
  let guard: UserAuthorisationGuard;
  let mockAuthenticationService: any;
  let mockNotificationService: any;
  let mockRouter: any;

  let stub: any = { };

  beforeEach(() => {
    mockAuthenticationService = {};
    Object.defineProperty(mockAuthenticationService, "isAuthenticated", {
      configurable: true,
      get: () => true,
    });

    mockNotificationService = {
      error: (message: string) => "Hi",
    };

    mockRouter = {
      navigate: (commands: any[], extras?: NavigationExtras) => { },
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AuthenticationService, useValue: mockAuthenticationService as AuthenticationService },
        { provide: NotificationService, useValue: mockNotificationService },
      ],
    });
    guard = TestBed.inject(UserAuthorisationGuard);
  });

  describe("canActivate", () => {
    it('Should return false if the user is not authenticated.', () => {
      spyOnProperty(mockAuthenticationService, "isAuthenticated", "get").and.returnValue(false);
      const result: boolean = guard.canActivate(stub, stub);
      expect(result).toBeFalse();
    });

    it('Should return true if the user is authenticated.', () => {
      spyOnProperty(mockAuthenticationService, "isAuthenticated", "get").and.returnValue(true);
      const result: boolean = guard.canActivate(stub, stub);
      expect(result).toBeTrue();
    });
  });
});
