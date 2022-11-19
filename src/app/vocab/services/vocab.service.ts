import { Observable } from 'rxjs';
import { VocabList, VocabListItem } from '../models';

export abstract class VocabService {
  public abstract get(userId: string): Observable<VocabList[]>;
  public abstract getWithId(vocabListId: string, userId: string): Observable<VocabList>;
  public abstract add(vocabList: VocabList): Observable<string>;
  public abstract addListItem(listItem: VocabListItem, listId: string): Observable<string>;
  public abstract update(id: string, updatedList: VocabList): Observable<void>;
}
