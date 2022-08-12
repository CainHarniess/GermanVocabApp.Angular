import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'verb-form',
  templateUrl: './verb-form.component.html',
  styleUrls: ['../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerbFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
