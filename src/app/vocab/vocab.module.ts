import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveComponentModule } from '@ngrx/component';

import { SharedModule } from '../shared/shared.module';
import { VocabFormsModule } from '../vocab-forms/vocab-forms.module';
import { VocabRoutingModule } from './vocab-routing.module';

import { VocabListCardComponent } from './vocab-list-card/vocab-list-card.component';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { VocabListsPresenterComponent } from './vocab-lists-presenter/vocab-lists-presenter.component';

import { DefiniteArticlePipe } from './pipes/definite-article.pipe';
import { IndefiniteArticlePipe } from './pipes/indefinite-article.pipe';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TestPipe } from './pipes/test.pipe';


@NgModule({
  declarations: [
    VocabListsComponent,
    VocabListCardComponent,
    VocabListsPresenterComponent,
    VocabListComponent,
    DefiniteArticlePipe,
    IndefiniteArticlePipe,
    TestPipe,
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
