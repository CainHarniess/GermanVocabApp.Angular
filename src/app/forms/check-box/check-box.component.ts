import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControlComponent } from '../form-control.component';

@Component({
  selector: 'form-check-box-control',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckBoxComponent extends FormControlComponent {

}
