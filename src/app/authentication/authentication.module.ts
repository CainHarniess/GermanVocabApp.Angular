import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveComponentModule } from '@ngrx/component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LogInFormBuilder, LogInFormComponent } from './log-in-form';


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
    LogInFormBuilder
  ]
})
export class AuthenticationModule { }
