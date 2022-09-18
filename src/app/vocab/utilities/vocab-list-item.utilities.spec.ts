import { StubVocabListItemBuilder } from "../../../testing";
import { WordType } from "../models/data";
import { isIrregularModifier, isIrregularVerb } from "./vocab-list-item.utilities";

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





const nonVerbTests = [
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Noun).build(), expected: false },
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Noun).build(), expected: false },
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Adjective).build(), expected: false },
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Adverb).build(), expected: false },
];

const verbTests = [
  {
    description: "Should return true when the third person present is specified and non-empty.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).withThirdPersonPresent("tpp").build(),
    expected: true
  },
  {
    description: "Should return true when the third person imperfect is specified and non-empty.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).withThirdPersonImperfect("tpi").build(),
    expected: true
  },
  {
    description: "Should return true when the perfect is specified and non-empty.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).withPerfect("p").build(),
    expected: true
  }, {
    description: "Should return false if no irregular verb forms are specified.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).build(),
    expected: false
  },
  {
    description: "Should return false if the third person present is undefined.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).withThirdPersonPresent(undefined).build(),
    expected: false
  },
  {
    description: "Should return false if the third person imperfect is undefined.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).withThirdPersonImperfect(undefined).build(),
    expected: false
  },
  {
    description: "Should return false if the perfect is undefined.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).withPerfect(undefined).build(),
    expected: false
  }, {
    description: "Should return false if the third person present the empty string.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).withThirdPersonPresent("").build(),
    expected: false
  },
  {
    description: "Should return false if the third person imperfect the empty string.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).withThirdPersonImperfect("").build(),
    expected: false
  },
  {
    description: "Should return false if the perfect is the empty string.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).withPerfect("").build(),
    expected: false
  },
];

const nonModifierTests = [
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Noun).build(), expected: false },
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).build(), expected: false },
];

const adjectiveTests = [
  {
    description: "Should return true for adjectives where the comparative is specified and non-empty.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Adjective).withComparative("c").build(),
    expected: true
  },
  {
    description: "Should return true for adjectives where the comparative is specified and non-empty.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Adjective).withSuperlative("s").build(),
    expected: true
  }, {
    description: "Should return true for adjectives where no irregular forms are specified.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Adjective).build(),
    expected: false
  },
  {
    description: "Should return true for adjectives where the comparative is undefined.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Adjective).withComparative(undefined).build(),
    expected: false
  },
  {
    description: "Should return true for adjectives where the superlative is undefined.",
    input: StubVocabListItemBuilder.stub().withWordType(WordType.Adjective).withSuperlative(undefined).build(),
    expected: false
  },
];
