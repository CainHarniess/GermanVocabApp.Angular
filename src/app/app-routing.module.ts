import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VocabComponent } from './vocab/vocab.component';

const routes: Routes = [
  {
    path: "",
    component: VocabComponent
  }, {
    path: "vocab-lists",
    component: VocabComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
