import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VocabComponent } from './vocab.component';
import { VocabListFormComponent } from './vocab-list-form/vocab-list-form.component';

const routes: Routes = [
  {
    path: "vocab-lists",
    component: VocabComponent
  },
  {
    path: "vocab-lists/vocab-list-form",
    component: VocabListFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabRoutingModule { }
