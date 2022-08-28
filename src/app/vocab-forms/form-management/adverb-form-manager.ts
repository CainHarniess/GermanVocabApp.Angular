import { WordType } from "../../vocab/models/data";
import { ModifierFormManager } from "./modifier-form-manager";

export class AdverbFormManager extends ModifierFormManager {
  public get wordType(): WordType { return WordType.Adverb; }
}
