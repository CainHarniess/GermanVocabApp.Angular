import { Injectable } from "@angular/core";
import { NounValidationManager, NounValueController, WordTypeFormManager } from ".";
import { WordType } from "../../vocab/models/data";

@Injectable()
export class NounFormManager extends WordTypeFormManager {
  public get wordType(): WordType { return WordType.Noun; }

  public constructor(validationManager: NounValidationManager, valueController: NounValueController) {
    super(validationManager, valueController);
  }
}
