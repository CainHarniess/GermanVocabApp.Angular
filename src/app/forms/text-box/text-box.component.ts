import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormControlComponent } from '../form-control.component';

@Component({
  selector: 'form-text-box-control',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBoxComponent extends FormControlComponent {
  @Input() public placeholder?: string;
}
