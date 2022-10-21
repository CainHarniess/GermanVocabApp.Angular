import { Injectable } from "@angular/core";
import { ModifierValidationManager, ModifierValueController, WordTypeFormManager } from ".";
import { WordType } from "../../vocab/models/data";

@Injectable()
export class AdverbFormManager extends WordTypeFormManager {
  public get wordType(): WordType { return WordType.Adverb; }
  public constructor(validationController: ModifierValidationManager,
    valueController: ModifierValueController) {
    super(validationController, valueController);
  }
}
