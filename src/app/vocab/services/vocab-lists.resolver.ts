import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { VocabService } from '.';
import { NotificationService } from '../../../core';
import { AuthenticationService } from '../../authentication/services';
import { VocabList } from '../models/vocab-list.interface';

@Injectable()
export class VocabListsResolver implements Resolve<VocabList[]> {
  public constructor(private readonly vocabListService: VocabService,
    private readonly authenticationService: AuthenticationService,
    private readonly notificationService: NotificationService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VocabList[]> {
    const userId: string | undefined = this.authenticationService.currentUser?.id;

    if (!userId) {
      const undefinedUserError$: Observable<VocabList[]> = throwError(() => new Error("Current user is undefined."));
      this.notificationService.error("Unable to retrieve vocab lists for an undefined user.");
      return undefinedUserError$;
    }
    return this.vocabListService.get(userId);
  }
}
