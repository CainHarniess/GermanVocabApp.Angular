import { Gender } from "../../models/data/gender.enum";
import { DefiniteArticlePipe } from "../definite-article.pipe";

const capitalisedTestCases = [
  { input: Gender.Masculine, expectedDefinite: "Der" },
  { input: Gender.Feminine, expectedDefinite: "Die" },
  { input: Gender.Neuter, expectedDefinite: "Das" },
];

const nonCapitalisedTestCases = [
  { input: Gender.Masculine, expectedDefinite: "der" },
  { input: Gender.Feminine, expectedDefinite: "die" },
  { input: Gender.Neuter, expectedDefinite: "das" },
];

const nonsenseInput: string = "blah blah";

describe("DefiniteArticlePipe", () => {
  let pipe: DefiniteArticlePipe;

  beforeEach(() => {
    pipe = new DefiniteArticlePipe();
  });

  describe("transform()", () => {
    it("Should throw an error when non-gender input is provided.", () => {
      expect(function () { pipe.transform(nonsenseInput) }).toThrow();
    });

    it("Should have correct error message when non-gender input is provided.", () => {
      expect(function () { pipe.transform(nonsenseInput) })
        .toThrow(new Error(`Invalid noun gender value ${nonsenseInput} provided`));
    });

    describe("With Capitalisation", () => {
      capitalisedTestCases.forEach(test => {
        it(`Should return ${test.expectedDefinite} when input is ${test.input}.`, () => {
          const result = pipe.transform(test.input);
          expect(result).toBe(test.expectedDefinite);
        });
      });
    })

    describe("Without Capitalisation", () => {
      nonCapitalisedTestCases.forEach(test => {
        it(`Should return ${test.expectedDefinite} when input is ${test.input}.`, () => {
          const result = pipe.transform(test.input, false);
          expect(result).toBe(test.expectedDefinite);
        });
      });
    });
  });
});
