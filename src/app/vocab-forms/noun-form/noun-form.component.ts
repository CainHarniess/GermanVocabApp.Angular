import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'noun-form',
  templateUrl: './noun-form.component.html',
  styleUrls: ['./noun-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NounFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
