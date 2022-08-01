import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VocabComponent } from './vocab/vocab.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "vocab", component: VocabComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
