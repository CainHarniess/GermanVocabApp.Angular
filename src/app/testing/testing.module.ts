import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
