import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorTestingService } from '.';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorActionRowComponent } from './error-action-row/error-action-row.component';
import { TestingRoutingModule } from './testing-routing.module';
import { SuccessActionRowComponent } from './success-action-row/success-action-row.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ErrorActionRowComponent,
    SuccessActionRowComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TestingRoutingModule,
  ],
  providers: [
    ErrorTestingService,
  ],
})
export class TestingModule { }
