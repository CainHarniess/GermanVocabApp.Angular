import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-vocab-list',
  template: '',
  /*templateUrl: 'vocab-list-form.component.html',*/
  styleUrls: ['./vocab-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditVocabListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
