import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { VocabService } from '.';
import { NotificationService } from '../../../core';
import { AuthenticationService } from '../../authentication/services';
import { VocabList } from '../models/vocab-list.interface';

@Injectable()
export class VocabListResolver implements Resolve<VocabList> {
  constructor(private vocabListService: VocabService,
    private readonly authenticationService: AuthenticationService,
    private readonly notificationService: NotificationService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VocabList> {
    const userId: string | undefined = this.authenticationService.currentUser?.id;

    if (!userId) {
      const undefinedUserError$: Observable<VocabList> = throwError(() => new Error("Current user is undefined."));
      this.notificationService.error("Unable to retrieve vocab lists for an undefined user.");
      return undefinedUserError$;
    }

    const vocabListId: string = route.paramMap.get("id")!;
    return this.vocabListService.getWithId(vocabListId, userId);
  }
}
