import { Injectable } from "@angular/core";
import { VerbValueController, WordTypeFormManager } from ".";
import { WordType } from "../../vocab/models/data";
import { VerbValidationManager } from "./verb-validation.manager";

@Injectable()
export class VerbFormManager extends WordTypeFormManager {
  public get wordType(): WordType { return WordType.Verb; }

  public constructor(validationManager: VerbValidationManager,
    valueController: VerbValueController) {
    super(validationManager, valueController);
  }
}
