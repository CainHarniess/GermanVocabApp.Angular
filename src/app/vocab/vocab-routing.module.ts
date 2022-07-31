import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { VocabListFormComponent } from './vocab-list-form/vocab-list-form.component';
import { VocabComponent } from './vocab.component';

const routes: Routes = [
  {
    path: "vocab", component: VocabComponent,
    children: [
      { path: "vocab-lists", component: VocabListsComponent },
      { path: "", redirectTo: "vocab-lists", pathMatch: "full" },
      { path: "vocab-list-form", component: VocabListFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabRoutingModule { }
