import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingRoutePath } from '../shared/routing';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: TestingRoutePath.Dashboard,
    title: "German Vocab App | Testing | Dashboard",
    component: DashboardComponent,
  },
  { path: "", redirectTo: TestingRoutePath.Dashboard, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
