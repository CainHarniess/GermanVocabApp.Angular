import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { VocabList } from '../models/vocab-list.interface';

@Component({
  selector: 'vocab-lists-presenter',
  templateUrl: './vocab-lists-presenter.component.html',
  styleUrls: ['./vocab-lists-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VocabListsPresenterComponent {
  @Input() public lists!: VocabList[];

  @Output() public readonly view = new EventEmitter<string>();
  @Output() public readonly edit = new EventEmitter<string>();

  public viewList(id: string): void {
    this.view.emit(id);
  }

  public editList(id: string): void {
    this.edit.emit(id);
  }
}
