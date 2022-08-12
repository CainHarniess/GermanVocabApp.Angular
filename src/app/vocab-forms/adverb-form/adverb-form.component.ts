import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'adverb-form',
  templateUrl: './adverb-form.component.html',
  styleUrls: ['../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdverbFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
