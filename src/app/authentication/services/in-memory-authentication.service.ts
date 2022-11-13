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
    return of(user).pipe(delay(this.delayMs));
  }
}
