import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorTestingService } from '.';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BadRequestCommand, ClientErrorCommand, UnauthorisedCommand } from './commands';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorActionRowComponent } from './error-action-row/error-action-row.component';
import { TestingRoutingModule } from './testing-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ErrorActionRowComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TestingRoutingModule,
  ],
  providers: [
    ErrorTestingService,
    ClientErrorCommand,
    UnauthorisedCommand,
    BadRequestCommand,
  ],
})
export class TestingModule { }
