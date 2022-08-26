import { ModifierFormManager } from "./modifier-form-manager";
import { WordType } from "../../vocab/models/data/word-type.enum";

export class AdjectiveFormManager extends ModifierFormManager {
  public get wordType(): WordType { return WordType.Adjective; }
}
