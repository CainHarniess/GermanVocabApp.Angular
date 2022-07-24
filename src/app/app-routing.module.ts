import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabComponent } from './vocab/vocab.component';

const routes: Routes = [
  {
    path: "vocab-lists",
    component: VocabComponent
  },
  {
    path: "",
    component: VocabComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
