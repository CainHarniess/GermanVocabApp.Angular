import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VocabListService } from '.';
import { VocabList } from '../models/vocab-list.interface';

// TODO: Provide this in the vocab module only.
@Injectable({
  providedIn: 'root'
})
export class VocabListsResolver implements Resolve<VocabList[]> {

  constructor(private vocabListService: VocabListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VocabList[]> {
    return this.vocabListService.get();
  }
}
