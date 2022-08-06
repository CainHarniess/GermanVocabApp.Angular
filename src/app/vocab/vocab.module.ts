import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpVocabListService } from './services/http-vocab-list.service';
import { VocabListService } from './services/vocab-list.service';
import { VocabListCardComponent } from './vocab-list-card/vocab-list-card.component';
import { VocabListFormComponent } from './vocab-list-form/vocab-list-form.component';
import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { VocabRoutingModule } from './vocab-routing.module';
import { VocabComponent } from './vocab.component';
import { InMemoryVocabListDataService } from './services/in-memory-vocab-list-data.service';
import { VocabListsPresenterComponent } from './vocab-lists-presenter/vocab-lists-presenter.component';
import { VocabListItemFormComponent } from './vocab-list-item-form/vocab-list-item-form.component';
import { VocabAppFormsModule } from '../forms/vocab-app-forms.module';
import { VocabListComponent } from './vocab-list/vocab-list.component';

import { DefiniteArticlePipe } from './pipes/definite-article.pipe';
import { IndefiniteArticlePipe } from './pipes/indefinite-article.pipe';

import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    VocabListsComponent,
    VocabListCardComponent,
    VocabComponent,
    VocabListFormComponent,
    VocabListsPresenterComponent,
    VocabListItemFormComponent,
    VocabListComponent,
    DefiniteArticlePipe,
    IndefiniteArticlePipe,
  ],
  providers: [
    { provide: VocabListService, useClass: HttpVocabListService }
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VocabRoutingModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemoryVocabListDataService),
    VocabAppFormsModule,
    ReactiveComponentModule,
  ],
  exports: [
    VocabListsComponent
  ]
})
export class VocabModule { }
