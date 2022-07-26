import { NgModule } from '@angular/core';
import { RequiredIfTouchedErrorStateMatcher } from '../../core/validation';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { VocabAppFormsModule } from '../forms/vocab-app-forms.module';
import { SharedModule } from '../shared/shared.module';
import { ItemValidationProvider, VocabListFormBuilder, VocabListFormValidationProvider, VocabListItemFormBuilder } from './services';
import { ListTitleObservableBuilder } from './services/list-title-observable.builder';
import { AddVocabListFormComponent } from './vocab-list-form/add-vocab-list-form.component';
import { EditVocabListComponent } from './vocab-list-form/edit-vocab-list.component';
import { VocabListItemFormComponent } from './vocab-list-item-form/vocab-list-item-form.component';
import {
    AdjectiveFormComponent, AdjectiveFormManager, AdverbFormComponent, AdverbFormManager,
    IrregularValidationVisitor,
    ModifierValidationController, ModifierValueController, NounFormComponent, NounFormManager,
    NounValidationController, NounValueController, VerbFormComponent, VerbFormManager,
    VerbValidationController, VerbValueController
} from './word-type-forms';

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
    // TODO: Review why this is exported but the edit component is not.
    AddVocabListFormComponent,
  ],
  providers: [
    RequiredIfTouchedErrorStateMatcher,
    IrregularValidationVisitor,

    ListTitleObservableBuilder,

    ItemValidationProvider,
    VocabListItemFormBuilder,
    VocabListFormBuilder,

    NounValueController,
    VerbValueController,
    ModifierValueController,

    VocabListFormValidationProvider,
    NounValidationController,
    VerbValidationController,
    ModifierValidationController,

    NounFormManager,
    VerbFormManager,
    AdjectiveFormManager,
    AdverbFormManager,
  ]
})
export class VocabFormsModule { }
