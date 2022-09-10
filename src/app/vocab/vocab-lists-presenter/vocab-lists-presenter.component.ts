import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VocabList } from '../models/vocab-list.interface';
import { VocabRoutePath } from '../vocab-routing.module';

@Component({
  selector: 'vocab-lists-presenter',
  templateUrl: './vocab-lists-presenter.component.html',
  styleUrls: ['./vocab-lists-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListsPresenterComponent {
  constructor(private router: Router) {

  }

  @Input() public lists!: VocabList[];

  public editList(id: string): void {
    this.router.navigate([VocabRoutePath.VocabLists, id, "edit"])
  }
}
