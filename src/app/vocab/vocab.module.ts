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


@NgModule({
  declarations: [
    VocabListsComponent,
    VocabListCardComponent,
    VocabComponent,
    VocabListFormComponent,
  ],
  providers: [
    { provide: VocabListService, useClass: HttpVocabListService }
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VocabRoutingModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemoryVocabListDataService),
  ],
  exports: [
    VocabListsComponent
  ]
})
export class VocabModule { }
