import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VocabList } from '.././models/vocab-list.interface';
import { VocabListService } from '.././services/vocab-list.service';
@Component({
  selector: 'app-vocab-lists',
  templateUrl: './vocab-lists.component.html',
  styleUrls: ['./vocab-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListsComponent {

  constructor(private vocabListService: VocabListService, private router: Router) { }

  public readonly vocabLists$: Observable<VocabList[]> = this.vocabListService.get();

  public addVocabList(): void {
    this.router.navigate(["/vocab", "vocab-list-form"]);
  }
}
