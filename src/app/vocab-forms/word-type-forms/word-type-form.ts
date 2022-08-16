import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Case } from '../../vocab/models/data/case.enum';
import { Gender } from '../../vocab/models/data/gender.enum';

import { SingleSelectOption } from '../../forms/single-select/single-select-option.interface';

@Component({template: ''})
export abstract class WordTypeForm {
  public readonly Gender: typeof Gender = Gender;

  public readonly caseOptions: SingleSelectOption<Case>[] = [{
    value: Case.Nominative,
    label: "Nominative",
  }, {
    value: Case.Accusative,
    label: "Accusative",
  }, {
    value: Case.Dative,
    label: "Dative",
  }, {
    value: Case.Genetive,
    label: "Genetive",
  }];

  @Input() public form!: FormGroup;
  @Input() public index!: number;

  public get formRoot(): FormGroup { return this.form.root as FormGroup; }
}
