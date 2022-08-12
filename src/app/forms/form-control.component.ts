import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  template: '',
})
export abstract class FormControlComponent {
  @Input() public form!: AbstractControl;
  @Input() public controlName!: string;
  @Input() public controlId!: string;
  @Input() public label!: string;

  public get formGroup(): FormGroup { return <FormGroup>this.form; }
}
