import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CheckBoxComponent } from './check-box/check-box.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  declarations: [
    TextBoxComponent,
    CheckBoxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CheckBoxComponent,
    TextBoxComponent,
  ]
})
export class VocabAppFormsModule { }
