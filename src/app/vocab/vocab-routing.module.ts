//Stryker disable all
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { AddVocabListFormComponent, EditVocabListComponent } from '../vocab-forms/vocab-list-form';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabListResolver, VocabListsResolver } from './services';
import { VocabRoutePath } from '../shared/routing';

const routes: Routes = [
  {
    path: VocabRoutePath.VocabLists,
    title: "German Vocab App | Vocab | Lists",
    component: VocabListsComponent,
    resolve: { resolvedVocabLists: VocabListsResolver }
  }, {
    path: `${VocabRoutePath.VocabLists}/new`,
    title: "German Vocab App | Vocab | New Vocab List",
    component: AddVocabListFormComponent
  }, {
    path: `${VocabRoutePath.VocabLists}/:id/edit`,
    title: "German Vocab App | Vocab | Edit Vocab List",
    component: EditVocabListComponent,
    resolve: { resolvedVocabList: VocabListResolver }
  }, {
    path: `${VocabRoutePath.VocabLists}/:id`,
    title: "German Vocab App | Vocab | Vocab List",
    component: VocabListComponent,
    resolve: { resolvedVocabList: VocabListResolver }
  },
  { path: "", redirectTo: "vocab-lists", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabRoutingModule {

}
