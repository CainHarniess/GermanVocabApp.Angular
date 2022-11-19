import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AuthenticationService, InMemoryUserDataProvider } from '.';
import { InMemoryService } from '../../../core';
import { User } from '../../shared/models';
import { UserCredentials } from '../models';

@Injectable()
export class InMemoryAuthenticationService extends InMemoryService
  implements AuthenticationService {
  private readonly users: User[];

  public constructor(dataProvider: InMemoryUserDataProvider) {
    super();
    this.users = dataProvider.provide();
  }

  // TODO: Store this info in session storage or something.
  private _currentUser?: User;
  public get currentUser(): User | undefined {
    return this._currentUser;
  }

  public get isAuthenticated(): boolean {
    return this.currentUser !== undefined;
  }

  public authenticate(credentials: UserCredentials): Observable<User | undefined> {
    const user: User | undefined = this.users.find(u => u.username === credentials.username
                                                     && u.password === credentials.password);
    if (user) {
      this._currentUser = user;
    }
    return of(user).pipe(delay(this.delayMs));
  }

  public logOut(): Observable<User | undefined> {
    if (!this.currentUser) {
      console.error("Unable to log out user that is already logged out.");
      return of(undefined);
    }
    const cachedUser: User = this.currentUser;
    this._currentUser = undefined;
    return of(cachedUser);
  }
}
