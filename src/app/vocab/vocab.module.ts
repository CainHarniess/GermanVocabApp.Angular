import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveComponentModule } from '@ngrx/component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { VocabFormsModule } from '../vocab-forms/vocab-forms.module';
import { VocabRoutingModule } from './vocab-routing.module';

import { DefiniteArticlePipe, FixedPluralDisplayPipe, GermanShortCasePipe, IndefiniteArticlePipe, SeparableDisplayPipe, ThirdPersonAuxiliaryPipe, TransitiveDisplayPipe } from './pipes';
import { ModifierVocabListItemComponent } from './vocab-list-items/modifier-vocab-list-item/modifier-vocab-list-item.component';
import { NounVocabListItemComponent } from './vocab-list-items/noun-vocab-list-item/noun-vocab-list-item.component';
import { VerbVocabListItemComponent } from './vocab-list-items/verb-vocab-list-item/verb-vocab-list-item.component';
import { VocabListItemComponent } from './vocab-list-items/vocab-list-item.component';
import { VocabListComponent } from './vocab-list/vocab-list.component';
import { VocabListsPresenterComponent } from './vocab-lists-presenter/vocab-lists-presenter.component';
import { VocabListsComponent } from './vocab-lists/vocab-lists.component';
import { HttpVocabService, VocabListResolver, VocabService, VocabListsResolver } from './services';

@NgModule({
  declarations: [
    VocabListsComponent,
    VocabListsPresenterComponent,
    VocabListComponent,
    DefiniteArticlePipe,
    IndefiniteArticlePipe,
    VocabListItemComponent,
    ModifierVocabListItemComponent,
    NounVocabListItemComponent,
    VerbVocabListItemComponent,
    GermanShortCasePipe,
    FixedPluralDisplayPipe,
    ThirdPersonAuxiliaryPipe,
    TransitiveDisplayPipe,
    SeparableDisplayPipe,
  ],
  providers: [
    { provide: VocabService, useClass: HttpVocabService },
    VocabListsResolver,
    VocabListResolver,
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
    VocabListsComponent,
  ]
})
export class VocabModule { }
