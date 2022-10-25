import { FormGroup, Validators } from "@angular/forms";
import { WordType } from "../../../vocab/models/data/word-type.enum";
import { VocabListItemForm } from "../../models/vocab-list-item-form.interface";
import {
    AdjectiveFormManager, AdverbFormManager, ModifierValidationController, ModifierValueController,
    NounFormManager, NounValidationController, NounValueController, VerbFormManager, VerbValidationController, VerbValueController, WordTypeFormManager
} from "../../word-type-forms";
import { WordTypeFormManagerFactory } from "../word-type-form-manager-factory";

describe("WordTypeFormManagerFactory", () => {
  let formManagerFactory: WordTypeFormManagerFactory;
  let mockForm: FormGroup<VocabListItemForm>;

  beforeEach(() => {
    formManagerFactory = createFactory();
    mockForm = jasmine.createSpyObj([""]);
  });

  describe("create()", () => {
    it(`Should throw exception when word type is ${ WordType.None }.`, () => {
      expect(function () { formManagerFactory.create(WordType.None, mockForm) })
        .toThrow();
    });

    it(`Should produce correct exception message word type is ${ WordType.None }`, () => {
      expect(function () { formManagerFactory.create(WordType.None, mockForm) })
        .toThrow(new Error("Unable to create word type form manager from None word type."));
    });

    let tests: WordType[] = [
      WordType.Noun,
      WordType.Verb,
      WordType.Adjective,
      WordType.Adverb
    ];

    tests.forEach(test => {
      it(`Should not throw an exception when word type is ${test}.`, () => {
        expect(function () { formManagerFactory.create(test, mockForm) })
          .not.toThrow();
      });
    });

    tests.forEach(test => {
      it(`Should produce ${test} FormManager when word type is ${test}`, () => {
        expect(formManagerFactory.create(test, mockForm).wordType).toBe(test);
      });
    });
  });
});

function createFactory(): WordTypeFormManagerFactory {
  return new WordTypeFormManagerFactory(createNounFormManager(), createVerbFormManager(),
    createAdjectiveFormManager(), createAdverbFormManager());
}

function createNounFormManager(): NounFormManager {
  const validationManager: NounValidationController = new NounValidationController(createMockValidatorFactory());
  const valueController: NounValueController = new NounValueController();
  return new NounFormManager(validationManager, valueController);
}

function createVerbFormManager(): VerbFormManager {
  const validationManager: VerbValidationController = new VerbValidationController(createMockValidatorFactory());
  const valueController: VerbValueController = new VerbValueController();
  return new VerbFormManager(validationManager, valueController);
}

function createAdjectiveFormManager<T extends WordTypeFormManager>(): T {
  const validationManager: ModifierValidationController = new ModifierValidationController();
  const valueController: ModifierValueController = new ModifierValueController();
  return new AdjectiveFormManager(validationManager, valueController) as T;
}

function createAdverbFormManager<T extends WordTypeFormManager>(): T {
  const validationManager: ModifierValidationController = new ModifierValidationController();
  const valueController: ModifierValueController = new ModifierValueController();
  return new AdverbFormManager(validationManager, valueController) as T;
}

function createMockValidatorFactory(): any {
  return {
    create: (lower: number, upper: number) => { return Validators.required },
  }
}
