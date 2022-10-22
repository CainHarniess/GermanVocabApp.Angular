import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Directive()
export abstract class FormControlComponent {
  @Input() public form!: AbstractControl;
  @Input() public controlName!: string;
  @Input() public controlId!: string;
  @Input() public label!: string;
  @Input() public errorMessage$: Observable<string | null> = of(null);

  public get formGroup(): FormGroup { return <FormGroup>this.form; }
}
