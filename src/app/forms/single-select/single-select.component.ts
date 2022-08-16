import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControlComponent } from '../form-control.component';
import { SingleSelectOption } from './single-select-option.interface';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class SingleSelectComponent<TValue> extends FormControlComponent {
  @Input() public options!: SingleSelectOption<TValue>[];
}
