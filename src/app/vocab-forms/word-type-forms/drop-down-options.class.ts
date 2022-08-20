import { SingleSelectOption } from "../../forms/single-select/single-select-option.interface";
import { AuxiliaryVerb } from "../../vocab/models/data/auxiliary-verb.enum";
import { Case, ReflexiveCase } from "../../vocab/models/data/case.enum";
import { FixedPlurality } from "../../vocab/models/data/fixed-plurality.enum";
import { Gender } from "../../vocab/models/data/gender.enum";

export class DropDownOptions{
  public static readonly caseOptions: SingleSelectOption<Case>[] = [{
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

  public static readonly reflexiveCaseOptions: SingleSelectOption<ReflexiveCase>[] = [{
    value: ReflexiveCase.Accusative,
    label: "Accusative",
  }, {
    value: ReflexiveCase.Dative,
    label: "Dative",
  }];

  public static readonly auxiliaryVerbOptions: SingleSelectOption<AuxiliaryVerb>[] = [{
    value: AuxiliaryVerb.Haben,
    label: "Haben",
  }, {
    value: AuxiliaryVerb.Sein,
    label: "Sein",
  }];

  public static readonly genderOptions: SingleSelectOption<Gender>[] = [{
    value: Gender.Masculine,
    label: "Masculine",
  }, {
    value: Gender.Feminine,
    label: "Feminine",
  }, {
    value: Gender.Neuter,
    label: "Neuter",
  }];

  public static readonly fixedPluralityOptions: SingleSelectOption<FixedPlurality>[] = [{
    value: FixedPlurality.Singular,
    label: "Singular",
  }, {
    value: FixedPlurality.Plural,
    label: "Plural",
  }, {
    value: FixedPlurality.None,
    label: "None",
  }];
}