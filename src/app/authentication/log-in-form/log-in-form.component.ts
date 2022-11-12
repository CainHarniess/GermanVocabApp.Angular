import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogInForm, LogInFormBuilder } from '.';
import { NotificationService } from '../../../core';
import { LogService } from '../../../core/logging';

@Component({
  selector: 'landing-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInFormComponent implements OnInit {
  constructor(private readonly logService: LogService,
    private readonly router: Router,
    private readonly logInFormBuilder: LogInFormBuilder,
    private readonly notificationService: NotificationService) {

  }

  public form!: FormGroup<LogInForm>;
  public usernameValidationMessage$!: Observable<string | null>;
  public passwordValidationMessage$!: Observable<string | null>;

  ngOnInit(): void {
    this.form = this.logInFormBuilder.build();
  }

  public submit(): void {
    console.log("Submitted.");
  }
}
