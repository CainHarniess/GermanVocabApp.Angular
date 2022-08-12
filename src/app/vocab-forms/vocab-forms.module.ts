import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NounFormComponent } from './word-type-form/noun-form/noun-form.component';
import { VocabAppFormsModule } from '../forms/vocab-app-forms.module';
import { VocabListFormComponent } from './vocab-list-form/vocab-list-form.component';
import { VocabListItemFormComponent } from './vocab-list-item-form/vocab-list-item-form.component';
import { SharedModule } from '../shared/shared.module';
import { VerbFormComponent } from './word-type-form/verb-form/verb-form.component';
import { AdjectiveFormComponent } from './word-type-form/adjective-form/adjective-form.component';
import { AdverbFormComponent } from './word-type-form/adverb-form/adverb-form.component';

@NgModule({
  declarations: [
    VocabListFormComponent,
    VocabListItemFormComponent,
    NounFormComponent,
    VerbFormComponent,
    AdjectiveFormComponent,
    AdverbFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    VocabAppFormsModule,
    ReactiveFormsModule,
  ]
})
export class VocabFormsModule { }
