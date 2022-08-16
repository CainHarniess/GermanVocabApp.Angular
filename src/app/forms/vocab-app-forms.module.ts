import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CheckBoxComponent } from './check-box/check-box.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  declarations: [
    TextBoxComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    DropDownComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CheckBoxComponent,
    TextBoxComponent,
    RadioButtonComponent,
    DropDownComponent,
  ]
})
export class VocabAppFormsModule { }
