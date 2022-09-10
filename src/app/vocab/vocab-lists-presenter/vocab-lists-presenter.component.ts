import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VocabList } from '../models/vocab-list.interface';

@Component({
  selector: 'vocab-lists-presenter',
  templateUrl: './vocab-lists-presenter.component.html',
  styleUrls: ['./vocab-lists-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListsPresenterComponent {
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  @Input() public lists!: VocabList[];

  // TODO: add test.
  public editList(id: string): void {
    this.router.navigate([id, "edit"], { relativeTo: this.route });
  }
}
