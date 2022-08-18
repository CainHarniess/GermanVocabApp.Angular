import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Case, ReflexiveCase } from '../../vocab/models/data/case.enum';
import { Gender } from '../../vocab/models/data/gender.enum';

import { SingleSelectOption } from '../../forms/single-select/single-select-option.interface';
import { AuxiliaryVerb } from '../../vocab/models/data/auxiliary-verb.enum';

@Component({ template: '' })
export abstract class WordTypeForm {
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

  public readonly reflexiveCaseOptions: SingleSelectOption<ReflexiveCase>[] = [{
    value: ReflexiveCase.Accusative,
    label: "Accusative",
  }, {
    value: ReflexiveCase.Dative,
    label: "Dative",
  }];

  public readonly auxiliaryVerbOptions: SingleSelectOption<AuxiliaryVerb>[] = [{
    value: AuxiliaryVerb.Haben,
    label: "Haben",
  }, {
    value: AuxiliaryVerb.Sein,
    label: "Sein",
  }];

  @Input() public form!: FormGroup;
  @Input() public index!: number;

  public get formRoot(): FormGroup { return this.form.root as FormGroup; }
}
