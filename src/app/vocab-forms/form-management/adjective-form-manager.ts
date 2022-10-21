import { Injectable } from "@angular/core";
import { ModifierValidationManager, ModifierFormManager } from ".";
import { WordType } from "../../vocab/models/data";

@Injectable()
export class AdjectiveFormManager extends ModifierFormManager {
  public get wordType(): WordType { return WordType.Adjective; }

  public constructor(validationManager: ModifierValidationManager) {
    super(validationManager);
  }
}
