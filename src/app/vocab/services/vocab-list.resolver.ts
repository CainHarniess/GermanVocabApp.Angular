import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VocabListService } from '.';
import { VocabList } from '../models/vocab-list.interface';

@Injectable()
export class VocabListResolver implements Resolve<VocabList> {
  constructor(private vocabListService: VocabListService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VocabList> {
    const vocabListId: string = route.paramMap.get("id")!;
    return this.vocabListService.getWithId(vocabListId);
  }
}
