import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-text-box-control',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBoxComponent {
  @Input() form!: AbstractControl;
  @Input() controlName!: string;
  @Input() controlId!: string;
  @Input() label!: string;
  @Input() placeholder?: string;

  public get formGroup(): FormGroup { return <FormGroup>this.form;  }
}
