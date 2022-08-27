import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SingleSelectComponent } from '../single-select/single-select.component';

@Component({
  selector: 'form-drop-down-control',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownComponent extends SingleSelectComponent<any>{
  // TODO: Add nullable answers when field is not mandatory.
}
