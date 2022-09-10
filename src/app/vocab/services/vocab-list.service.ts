import { Observable } from 'rxjs';
import { VocabList, VocabListItem } from '../models';

export abstract class VocabListService {

  public abstract get(): Observable<VocabList[]>;

  public abstract getWithId(vocabListId: string): Observable<VocabList>;

  public abstract add(vocabList: VocabList): Observable<string>;

  public abstract addListItem(listItem: VocabListItem, listId: string): Observable<string>;

  public abstract update(updatedList: VocabList): Observable<VocabList>;
}
