import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VocabList } from '../models/vocab-list.interface';
import { VocabListService } from './vocab-list.service';

@Injectable({
  providedIn: 'root'
})
export class VocabListResolver implements Resolve<VocabList> {

  constructor(private vocabListService: VocabListService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VocabList> {
      const vocabListId: string = route.paramMap.get("id")!;
      return this.vocabListService.getWithId(vocabListId);
    }
}
