import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveComponentModule } from '@ngrx/component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LogInFormBuilder, LogInFormComponent, LogInFormValidationProvider, LOG_IN_FORM_VALIDATION_PROVIDER } from './log-in-form';
import { AuthenticationService, InMemoryAuthenticationService, InMemoryUserDataProvider } from './services';

@NgModule({
  declarations: [
    LogInFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveComponentModule,
    AngularMaterialModule,
    AuthenticationRoutingModule
  ],
  exports: [
    LogInFormComponent
  ],
  providers: [
    InMemoryUserDataProvider,
    { provide: AuthenticationService, useClass: InMemoryAuthenticationService },
    { provide: LOG_IN_FORM_VALIDATION_PROVIDER, useClass: LogInFormValidationProvider },
    LogInFormBuilder
  ]
})
export class AuthenticationModule { }
