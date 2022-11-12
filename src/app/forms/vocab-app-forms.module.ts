import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    AngularMaterialModule,
  ],
  exports: [
    CheckBoxComponent,
    TextBoxComponent,
    RadioButtonComponent,
    DropDownComponent,
  ]
})
export class VocabAppFormsModule { }
