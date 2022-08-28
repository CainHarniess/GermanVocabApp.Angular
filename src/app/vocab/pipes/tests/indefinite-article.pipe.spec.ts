import { Gender } from "../../models/data/gender.enum";
import { IndefiniteArticlePipe } from "../indefinite-article.pipe";

const capitalisedTestCases = [
  { input: Gender.Masculine, expectedDefinite: "Ein" },
  { input: Gender.Feminine, expectedDefinite: "Eine" },
  { input: Gender.Neuter, expectedDefinite: "Ein" },
];

const nonCapitalisedTestCases = [
  { input: Gender.Masculine, expectedDefinite: "ein" },
  { input: Gender.Feminine, expectedDefinite: "eine" },
  { input: Gender.Neuter, expectedDefinite: "ein" },
];

const nonsenseInput: string = "blah blah";

describe("IndefiniteArticlePipe", () => {
  let pipe: IndefiniteArticlePipe;

  beforeEach(() => {
    pipe = new IndefiniteArticlePipe();
  });

  describe("transform()", () => {
    it("Should throw an error when non-gender input is provided.", () => {
      expect(function () { pipe.transform(nonsenseInput) }).toThrow();
    });

    it("Should have correct error message when non-gender input is provided.", () => {
      const input: string = "blah blah";
      expect(function () { pipe.transform(input) })
        .toThrow(new Error(`Invalid noun gender value ${input} provided`));
    });

    describe("With Capitalisation", () => {
      capitalisedTestCases.forEach(test => {
        it(`Should return ${test.expectedDefinite} when input is ${test.input}.`, () => {
          const result = pipe.transform(test.input);
          expect(result).toBe(test.expectedDefinite);
        })
      });
    });

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
