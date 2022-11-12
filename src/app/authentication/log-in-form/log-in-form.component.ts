import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogInForm, LogInFormBuilder } from '.';
import { NotificationService } from '../../../core';
import { LogService } from '../../../core/logging';
import { FormComponent } from '../../forms';

@Component({
  selector: 'landing-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInFormComponent extends FormComponent<LogInForm>  {
  
  constructor(logService: LogService,
    private readonly router: Router,
    private readonly logInFormBuilder: LogInFormBuilder,
    private readonly notificationService: NotificationService) {
    super(logService);
  }

  public usernameValidationMessage$!: Observable<string | null>;
  public passwordValidationMessage$!: Observable<string | null>;

  protected buildForm(): void {
    this.form = this.logInFormBuilder.build();
  }

  public submit(): void {
    console.log("Submitted.");
  }
}
