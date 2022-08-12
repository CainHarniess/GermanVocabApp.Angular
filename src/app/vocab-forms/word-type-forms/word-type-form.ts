import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Gender } from '../../vocab/models/data/gender.enum';

@Component({template: ''})
export abstract class WordTypeForm {
  public readonly Gender: typeof Gender = Gender;

  @Input() public form!: FormGroup;
  @Input() public index!: number;

  public get formRoot(): FormGroup { return this.form.root as FormGroup; }
}
