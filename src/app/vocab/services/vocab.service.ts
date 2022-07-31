import { Observable } from 'rxjs';
import { VocabList } from '../models/vocab-list.interface';

export abstract class VocabService {

  public abstract get(): Observable<VocabList[]>;

  public abstract add(vocabList: VocabList): Observable<string>;
}
