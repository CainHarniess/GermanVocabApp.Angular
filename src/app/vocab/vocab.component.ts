import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VocabList } from './models/vocab-list.interface';
import { VocabListService } from './services/vocab-list.service';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabComponent {

  constructor(private vocabListService: VocabListService, private router: Router) { }

  public readonly vocabLists$: Observable<VocabList[]> = this.vocabListService.get();

  public addVocabList(): void {
    this.router.navigate(["vocab-lists/vocab-list-form"]);
  }
}
