import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInFormComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
  }
}
