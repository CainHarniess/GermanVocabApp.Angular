import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { LogInForm, LogInFormBuilder } from '.';
import { LogService } from '../../../core/logging';
import { ValidationErrorMessageProvider } from '../../../core/validation';
import { FormComponent } from '../../forms';
import { User } from '../../shared/models';
import { UserCredentials } from '../models';
import { AuthenticationService } from '../services';

@Component({
  selector: 'landing-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInFormComponent extends FormComponent<LogInForm>  {
  constructor(logService: LogService, errorMessageProvider: ValidationErrorMessageProvider,
    private readonly logInFormBuilder: LogInFormBuilder,
    private readonly authService: AuthenticationService) {
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

  @Output() public readonly submitted = new EventEmitter<User | undefined>();
  public submit(): void {
    const userCredentials: UserCredentials = this.form.value as UserCredentials;
    this.authService.authenticate(userCredentials)
      .pipe(
        takeUntil(this.destroy$),
    ).subscribe((user: User | undefined) => {
        this.submitted.emit(user);
      });
  }
}
