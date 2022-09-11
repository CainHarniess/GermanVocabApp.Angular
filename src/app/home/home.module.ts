import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { ModulesListComponent } from './modules-list/modules-list.component';
import { HomeComponent } from './home.component';
import { ModuleListCardComponent } from './module-list-card/module-list-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    ModulesListComponent,
    ModuleListCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
