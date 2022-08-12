import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { VocabListFormComponent } from '../vocab-forms/vocab-list-form/vocab-list-form.component';
import { VocabComponent } from './vocab.component';
import { VocabListsResolver } from './services/vocab-lists.resolver';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabListResolver } from './services/vocab-list.resolver';

const routes: Routes = [
  {
    path: "vocab", component: VocabComponent,
    children: [{
        path: "vocab-lists",
        component: VocabListsComponent,
        resolve: { resolvedVocabLists: VocabListsResolver }
    }, {
        path: "vocab-lists/:id",
        component: VocabListComponent,
        resolve: { resolvedVocabList: VocabListResolver }
      },
      { path: "", redirectTo: "vocab-lists", pathMatch: "full" },
      { path: "vocab-list-form", component: VocabListFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabRoutingModule {

}
