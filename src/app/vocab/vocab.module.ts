import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VocabRoutingModule } from './vocab-routing.module';
import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { VocabListCardComponent } from './vocab-list-card/vocab-list-card.component';
import { VocabComponent } from './vocab.component';


@NgModule({
  declarations: [
    VocabListsComponent,
    VocabListCardComponent,
    VocabComponent,
  ],
  imports: [
    CommonModule,
    VocabRoutingModule
  ],
  exports: [
    VocabListsComponent
  ]
})
export class VocabModule { }
