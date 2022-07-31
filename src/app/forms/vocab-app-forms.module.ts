import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box/text-box.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TextBoxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TextBoxComponent
  ]
})
export class VocabAppFormsModule { }
