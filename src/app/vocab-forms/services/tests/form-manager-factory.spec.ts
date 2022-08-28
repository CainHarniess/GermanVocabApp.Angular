import { FormGroup } from "@angular/forms";
import { WordType } from "../../../vocab/models/data/word-type.enum";
import { VocabListItemForm } from "../../models/vocab-list-item-form.interface";
import { WordTypeFormManagerFactory } from "../form-manager-factory";

describe("WordTypeFormManagerFactory", () => {
  let formManagerFactory: WordTypeFormManagerFactory;
  let mockForm: FormGroup<VocabListItemForm>;

  beforeEach(() => {
    formManagerFactory = new WordTypeFormManagerFactory();
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
      })
    });

    tests.forEach(test => {
      it(`Should produce ${test} FormManager when word type is ${test}`, () => {
        expect(formManagerFactory.create(test, mockForm).wordType).toBe(test);
      })
    })

  });
});
