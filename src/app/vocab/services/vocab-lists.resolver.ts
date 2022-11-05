import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VocabService } from '.';
import { VocabList } from '../models/vocab-list.interface';

@Injectable()
export class VocabListsResolver implements Resolve<VocabList[]> {

  constructor(private vocabListService: VocabService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VocabList[]> {
    return this.vocabListService.get();
  }
}
