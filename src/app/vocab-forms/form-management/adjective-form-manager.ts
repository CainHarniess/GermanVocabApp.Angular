import { WordType } from "../../vocab/models/data";
import { ModifierFormManager } from "./modifier-form-manager";

export class AdjectiveFormManager extends ModifierFormManager {
  public get wordType(): WordType { return WordType.Adjective; }
}
