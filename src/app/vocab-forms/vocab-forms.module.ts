import { NgModule } from '@angular/core';

import { NounFormComponent } from './word-type-forms/noun-form/noun-form.component';
import { VocabAppFormsModule } from '../forms/vocab-app-forms.module';
import { AddVocabListFormComponent } from './vocab-list-form/add-vocab-list-form.component';
import { VocabListItemFormComponent } from './vocab-list-item-form/vocab-list-item-form.component';
import { SharedModule } from '../shared/shared.module';
import { VerbFormComponent } from './word-type-forms/verb-form/verb-form.component';
import { AdjectiveFormComponent } from './word-type-forms/adjective-form/adjective-form.component';
import { AdverbFormComponent } from './word-type-forms/adverb-form/adverb-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { EditVocabListComponent } from './vocab-list-form/edit-vocab-list.component';

@NgModule({
  declarations: [
    AddVocabListFormComponent,
    VocabListItemFormComponent,
    NounFormComponent,
    VerbFormComponent,
    AdjectiveFormComponent,
    AdverbFormComponent,
    EditVocabListComponent,
  ],
  imports: [
    SharedModule,
    AngularMaterialModule,
    VocabAppFormsModule,
  ],
  exports: [
    AddVocabListFormComponent,
  ]
})
export class VocabFormsModule { }
