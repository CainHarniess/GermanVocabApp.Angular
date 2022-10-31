import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorTestingService } from '.';
import { NotificationService } from '../../core';
import { MatSnackBarService } from '../angular-material';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ActionRowComponent } from './action-row/action-row.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestingRoutingModule } from './testing-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ActionRowComponent,
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
