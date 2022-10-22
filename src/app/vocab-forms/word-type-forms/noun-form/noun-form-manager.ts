import { Injectable } from "@angular/core";
import { NounValidationManager, NounValueController } from ".";
import { WordType } from "../../../vocab/models/data";
import { WordTypeFormManager } from "../core";

@Injectable()
export class NounFormManager extends WordTypeFormManager {
  public get wordType(): WordType { return WordType.Noun; }

  public constructor(validationManager: NounValidationManager, valueController: NounValueController) {
    super(validationManager, valueController);
  }
}
