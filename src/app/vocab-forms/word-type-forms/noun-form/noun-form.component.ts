import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SingleSelectOption } from '../../../forms/single-select/single-select-option.interface';
import { Case } from '../../../vocab/models/data/case.enum';
import { FixedPlurality } from '../../../vocab/models/data/fixed-plurality.enum';
import { Gender } from '../../../vocab/models/data/gender.enum';
import { WordTypeForm } from '../word-type-form';

@Component({
  selector: 'noun-form',
  templateUrl: './noun-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NounFormComponent extends WordTypeForm {
  public readonly genderOptions: SingleSelectOption<Gender>[] = [{
    value: Gender.Masculine,
    label: "Masculine",
  }, {
    value: Gender.Feminine,
    label: "Feminine",
  }, {
    value: Gender.Neuter,
    label: "Neuter",
  }];

  public readonly fixedPluralityOptions: SingleSelectOption<FixedPlurality>[] = [{
    value: FixedPlurality.Singular,
    label: "Singular",
  }, {
    value: FixedPlurality.Plural,
    label: "Plural",
  }, {
    value: FixedPlurality.None,
    label: "None",
  }];

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
}
