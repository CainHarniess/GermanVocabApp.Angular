import { WordType } from "../models/data";
import { isIrregularModifier, isIrregularVerb } from "./vocab-list-item.utilities";
import { adjectiveTests, nonModifierTests, nonVerbTests, verbTests } from "./vocab-list-item.utilities.spec.data";

describe("VocabListItemUtilities", () => {
  describe(`${isIrregularVerb.name}`, () => {
    it("Should return false if the list item is undefined.", () => {
      expect(isIrregularVerb(undefined)).toBe(false);
    });

    nonVerbTests.forEach(test => {
      it(`Should return ${test.expected} if the word type is ${test.input.wordType}.`, () => {
        expect(isIrregularVerb(test.input)).toBe(test.expected);
      });
    });

    verbTests.forEach(test => {
      it(test.description, () => {
        expect(isIrregularVerb(test.input)).toBe(test.expected);
      });
    });
  });

  describe(`${isIrregularModifier.name}`, () => {
    it("Should return false if the list item is undefined.", () => {
      expect(isIrregularModifier(undefined)).toBe(false);
    });

    nonModifierTests.forEach(test => {
      it(`Should return ${test.expected} if the word type is ${test.input.wordType}.`, () => {
        expect(isIrregularModifier(test.input)).toBe(test.expected);
      });
    });

    adjectiveTests.forEach(test => {

      it(test.description, () => {
        expect(isIrregularModifier(test.input)).toBe(test.expected);
      });

      const adverbDescription: string = test.description.replace("adjectives", "adverbs");
      test.input.wordType = WordType.Adverb
      it(adverbDescription, () => {
        expect(isIrregularModifier(test.input)).toBe(test.expected);
      });
    });
  });
});
