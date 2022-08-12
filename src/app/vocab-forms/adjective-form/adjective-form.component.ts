import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'adjective-form',
  templateUrl: './adjective-form.component.html',
  styleUrls: ['../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdjectiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
