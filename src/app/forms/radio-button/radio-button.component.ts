import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SingleSelectComponent } from '../single-select/single-select.component';

@Component({
  selector: 'form-radio-button-control',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RadioButtonComponent extends SingleSelectComponent<any> {

}
