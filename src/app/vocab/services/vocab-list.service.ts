import { Observable } from 'rxjs';
import { Noun } from '../models/noun.interface';
import { VocabList } from '../models/vocab-list.interface';

export abstract class VocabListService {

  public abstract get(): Observable<VocabList[]>;

  public abstract getWithId(vocabListId: string): Observable<VocabList>;

  public abstract getListItems(vocabListId: string): Observable<Noun[]>;

  public abstract add(vocabList: VocabList): Observable<string>;
}
