import { Injectable } from "@angular/core";
import { VerbValidationController, VerbValueController } from ".";
import { WordType } from "../../../vocab/models/data";
import { WordTypeFormManager } from "../core";

@Injectable()
export class VerbFormManager extends WordTypeFormManager {
  public get wordType(): WordType { return WordType.Verb; }

  public constructor(validationManager: VerbValidationController,
    valueController: VerbValueController) {
    super(validationManager, valueController);
  }
}
