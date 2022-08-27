import { Case } from '../models/data/case.enum';
import { GermanShortCasePipe } from './german-short-case.pipe';

describe('GermanShortCasePipe', () => {
  let pipe: GermanShortCasePipe;

  beforeEach(() => {
    pipe = new GermanShortCasePipe();
  });

  describe("transform", () => {
    const tests = [
      { input: Case.Nominative, expectedUpper: "Nom.", expectedLower: "nom." },
      { input: Case.Accusative, expectedUpper: "Akk.", expectedLower: "akk." },
      { input: Case.Dative, expectedUpper: "Dat.", expectedLower: "dat." },
      { input: Case.Genetive, expectedUpper: "Gen.", expectedLower: "gen." },
    ];

    tests.forEach(test => {
      it(`Should return ${test.expectedUpper} when input is ${test.input} and no other arguments are provided.`, () => {
        expect(pipe.transform(test.input)).toBe(test.expectedUpper);
      });

      it(`Should return ${test.expectedLower} when input is ${test.input} when capitalise is set to false.`, () => {
        expect(pipe.transform(test.input, false)).toBe(test.expectedLower);
      });
    });
  });
});
