import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
  ]
})
export class SharedModule { }
