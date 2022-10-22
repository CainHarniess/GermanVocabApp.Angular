import { Injectable } from "@angular/core";
import { NounValidationController, NounValueController } from ".";
import { WordType } from "../../../vocab/models/data";
import { WordTypeFormManager } from "../core";

@Injectable()
export class NounFormManager extends WordTypeFormManager {
  public get wordType(): WordType { return WordType.Noun; }

  public constructor(validationManager: NounValidationController, valueController: NounValueController) {
    super(validationManager, valueController);
  }
}
