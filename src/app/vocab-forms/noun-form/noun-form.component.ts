import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'noun-form',
  templateUrl: './noun-form.component.html',
  styleUrls: ['../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NounFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
