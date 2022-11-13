import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AuthenticationService, InMemoryUserDataProvider } from '.';
import { InMemoryService } from '../../../core';
import { Undefined } from '../../../core/types';
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

  public authenticate(credentials: UserCredentials): Observable<boolean> {
    const result: boolean = this.authenticateInternal(credentials);
    return of(result).pipe(delay(this.delayMs));
  }

  private authenticateInternal(credentials: UserCredentials): boolean {
    const user: Undefined<User> = this.users.find(u => u.username === credentials.username);
    if (!user) {
      return false;
    }

    if (user.password !== credentials.password) {
      return false;
    }
    return true;
  }
}
