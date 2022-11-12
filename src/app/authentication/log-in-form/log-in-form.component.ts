import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogInForm, LogInFormBuilder } from '.';
import { NotificationService } from '../../../core';
import { LogService } from '../../../core/logging';
import { FormComponent } from '../../forms';
import { ValidationErrorMessageProvider } from '../../vocab-forms/validation';

@Component({
  selector: 'landing-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInFormComponent extends FormComponent<LogInForm>  {
  
  constructor(logService: LogService, errorMessageProvider: ValidationErrorMessageProvider,
    private readonly router: Router,
    private readonly notificationService: NotificationService,
    private readonly logInFormBuilder: LogInFormBuilder) {
    super(logService, errorMessageProvider);
  }

  public usernameMessage$!: Observable<string | null>;
  public passwordMessage$!: Observable<string | null>;

  public override ngOnInit(): void {
    super.ngOnInit();
    const controls: LogInForm = this.form.controls;
    this.usernameMessage$ = this.errorMessageProvider.provideFor(controls.username);
    this.passwordMessage$ = this.errorMessageProvider.provideFor(controls.password);
  }

  protected buildForm(): void {
    this.form = this.logInFormBuilder.build();
  }

  public submit(): void {
    console.log("Submitted.");
  }
}
