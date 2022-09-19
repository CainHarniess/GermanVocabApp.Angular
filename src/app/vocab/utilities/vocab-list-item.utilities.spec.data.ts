import { StubVocabListItemBuilder } from "../../../testing";
import { WordType } from "../models/data";

export const nonVerbTests = [
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Noun).build(), expected: false },
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Noun).build(), expected: false },
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Adjective).build(), expected: false },
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Adverb).build(), expected: false },
];

export const verbTests = [
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

export const nonModifierTests = [
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Noun).build(), expected: false },
  { input: StubVocabListItemBuilder.stub().withWordType(WordType.Verb).build(), expected: false },
];

export const adjectiveTests = [
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
