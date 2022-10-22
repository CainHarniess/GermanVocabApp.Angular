import { Injectable } from "@angular/core";
import { WordType } from "../../../vocab/models/data";
import { ModifierValidationController, ModifierValueController, WordTypeFormManager } from "../core";

@Injectable()
export class AdverbFormManager extends WordTypeFormManager {
  public get wordType(): WordType { return WordType.Adverb; }
  public constructor(validationController: ModifierValidationController,
    valueController: ModifierValueController) {
    super(validationController, valueController);
  }
}
