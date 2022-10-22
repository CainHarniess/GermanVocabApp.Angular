import { Injectable } from "@angular/core";
import { WordType } from "../../../vocab/models/data";
import { ModifierValidationController, ModifierValueController, WordTypeFormManager } from "../core";

@Injectable()
export class AdjectiveFormManager extends WordTypeFormManager {
  public get wordType(): WordType { return WordType.Adjective; }

  public constructor(validationController: ModifierValidationController,
    valueController: ModifierValueController) {
    super(validationController, valueController);
  }
}
