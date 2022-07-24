import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VocabRoutingModule } from './vocab-routing.module';
import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { VocabListCardComponent } from './vocab-list-card/vocab-list-card.component';
import { VocabComponent } from './vocab.component';
import { VocabListFormComponent } from './vocab-list-form/vocab-list-form.component';


@NgModule({
  declarations: [
    VocabListsComponent,
    VocabListCardComponent,
    VocabComponent,
    VocabListFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VocabRoutingModule
  ],
  exports: [
    VocabListsComponent
  ]
})
export class VocabModule { }
