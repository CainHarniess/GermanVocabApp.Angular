import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabComponent } from './vocab/vocab.component';

const routes: Routes = [
  { path: "vocab", component: VocabComponent },
  { path: "", redirectTo: "vocab", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
