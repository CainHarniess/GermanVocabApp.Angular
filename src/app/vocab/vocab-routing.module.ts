//Stryker disable all
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { AddVocabListFormComponent } from '../vocab-forms/vocab-list-form/add-vocab-list-form.component';
import { VocabListsResolver } from './services/vocab-lists.resolver';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabListResolver } from './services/vocab-list.resolver';

export enum VocabRoutePath {
  Root = "vocab",
  VocabLists = "vocab-lists",
}

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
    path: `${VocabRoutePath.VocabLists}/:id`,
    title: "German Vocab App | Vocab | Vocab List",
    component: VocabListComponent,
    resolve: { resolvedVocabList: VocabListResolver }
  }, {
    path: `${VocabRoutePath.VocabLists}/:id/edit`,
    title: "German Vocab App | Vocab | Edit Vocab List",
    component: AddVocabListFormComponent
  },
  { path: "", redirectTo: "vocab-lists", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabRoutingModule {

}
