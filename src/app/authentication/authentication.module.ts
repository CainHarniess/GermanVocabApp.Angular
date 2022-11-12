import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveComponentModule } from '@ngrx/component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LogInFormComponent } from './log-in-form/log-in-form.component';


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
  ]
})
export class AuthenticationModule { }
