import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ControlPanelComponent, ErrorControlPanelComponent, ErrorTestingService, NotificationControlPanelComponent } from '.';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ActionRowComponent } from './action-row/action-row.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestingRoutingModule } from './testing-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ControlPanelComponent,
    ActionRowComponent,
    ErrorControlPanelComponent,
    NotificationControlPanelComponent,
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
