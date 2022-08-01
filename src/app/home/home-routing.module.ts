import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModulesListComponent } from './modules-list/modules-list.component';

const routes: Routes = [{
  path: "home",
  component: HomeComponent,
  children: [
    { path: "modules-list", component: ModulesListComponent },
    { path: "", redirectTo: "modules-list", pathMatch: "full" }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
