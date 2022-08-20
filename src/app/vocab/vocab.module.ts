import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveComponentModule } from '@ngrx/component';

import { SharedModule } from '../shared/shared.module';
import { VocabFormsModule } from '../vocab-forms/vocab-forms.module';
import { VocabRoutingModule } from './vocab-routing.module';

import { VocabComponent } from './vocab.component';
import { VocabListCardComponent } from './vocab-list-card/vocab-list-card.component';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { VocabListsPresenterComponent } from './vocab-lists-presenter/vocab-lists-presenter.component';

import { HttpVocabListService } from './services/http-vocab-list.service';
import { InMemoryVocabListService } from './services/in-memory-vocab-list.service';
import { VocabListService } from './services/vocab-list.service';

import { DefiniteArticlePipe } from './pipes/definite-article.pipe';
import { IndefiniteArticlePipe } from './pipes/indefinite-article.pipe';


@NgModule({
  declarations: [
    VocabListsComponent,
    VocabListCardComponent,
    VocabComponent,
    VocabListsPresenterComponent,
    VocabListComponent,
    DefiniteArticlePipe,
    IndefiniteArticlePipe,
  ],
  providers: [
    { provide: VocabListService, useClass: HttpVocabListService }
    //{ provide: VocabListService, useClass: InMemoryVocabListService }
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveComponentModule,
    VocabRoutingModule,
    VocabFormsModule,
  ],
  exports: [
    VocabListsComponent
  ]
})
export class VocabModule { }
