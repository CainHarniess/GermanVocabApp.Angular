//Stryker disable all
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { VocabListFormComponent } from '../vocab-forms/vocab-list-form/vocab-list-form.component';
import { VocabListsResolver } from './services/vocab-lists.resolver';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabListResolver } from './services/vocab-list.resolver';

const routes: Routes = [
  {
    path: "vocab-lists",
    title: "German Vocab App | Vocab | Lists",
    component: VocabListsComponent,
    resolve: { resolvedVocabLists: VocabListsResolver }
  }, {
    path: "vocab-lists/:id",
    title: "German Vocab App | Vocab | Vocab List",
    component: VocabListComponent,
    resolve: { resolvedVocabList: VocabListResolver }
  }, {
    path: "vocab-list-form",
    title: "German Vocab App | Vocab | Vocab List Form",
    component: VocabListFormComponent
  },
  { path: "", redirectTo: "vocab-lists", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabRoutingModule {

}
