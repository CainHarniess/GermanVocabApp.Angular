import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VocabList } from '../models/vocab-list.interface';
import { VocabListService } from './vocab-list.service';

@Injectable({
  providedIn: 'root'
})
export class VocabListsResolver implements Resolve<VocabList[]> {

  constructor(private vocabListService: VocabListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VocabList[]> {
    return this.vocabListService.get();
  }
}