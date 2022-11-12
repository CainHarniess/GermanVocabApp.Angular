import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './application-container.component.html',
  styleUrls: ['./application-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationContainerComponent {
  constructor(private readonly router: Router) {

  }
}
