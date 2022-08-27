import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveComponentModule } from '@ngrx/component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { VocabFormsModule } from '../vocab-forms/vocab-forms.module';
import { VocabRoutingModule } from './vocab-routing.module';

import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { VocabListsPresenterComponent } from './vocab-lists-presenter/vocab-lists-presenter.component';
import { VocabListItemComponent } from './vocab-list-items/vocab-list-item.component';
import { ModifierVocabListItemComponent } from './vocab-list-items/modifier-vocab-list-item/modifier-vocab-list-item.component';

import { DefiniteArticlePipe } from './pipes/definite-article.pipe';
import { IndefiniteArticlePipe } from './pipes/indefinite-article.pipe';


@NgModule({
  declarations: [
    VocabListsComponent,
    VocabListsPresenterComponent,
    VocabListComponent,
    DefiniteArticlePipe,
    IndefiniteArticlePipe,
    VocabListItemComponent,
    ModifierVocabListItemComponent,
  ],
  providers: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveComponentModule,
    AngularMaterialModule,
    VocabFormsModule,
    VocabRoutingModule,
  ],
  exports: [
    VocabListsComponent
  ]
})
export class VocabModule { }
