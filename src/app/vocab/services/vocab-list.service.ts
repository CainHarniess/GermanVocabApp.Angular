import { Observable } from 'rxjs';
import { VocabList } from '../models/vocab-list.interface';

export abstract class VocabListService {

  public abstract get(): Observable<VocabList[]>;

  public abstract getWithId(vocabListId: string): Observable<VocabList>;

  public abstract add(vocabList: VocabList): Observable<string>;
}
