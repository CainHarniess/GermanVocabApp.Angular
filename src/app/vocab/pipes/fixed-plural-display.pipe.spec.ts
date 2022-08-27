import { FixedPlurality } from '../models/data/fixed-plurality.enum';
import { FixedPluralDisplayPipe } from './fixed-plural-display.pipe';

describe('FixedPluralDisplayPipe', () => {
  let pipe: FixedPluralDisplayPipe;

  beforeEach(() => {
    pipe = new FixedPluralDisplayPipe();
  });

  describe("transform", () => {
    const tests = [
      { input: FixedPlurality.None, expected: undefined },
      { input: FixedPlurality.Plural, expected: "Always plural" },
      { input: FixedPlurality.Singular, expected: "Always singular" },
    ];

    tests.forEach(test => {
      it(`Should return ${test.expected} when input is ${test.input}.`, () => {
        expect(pipe.transform(test.input)).toBe(test.expected);
      });
    });
  });
});
