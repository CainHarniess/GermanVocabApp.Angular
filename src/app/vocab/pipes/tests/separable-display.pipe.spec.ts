import { Separability } from '../../models/data';
import { SeparableDisplayPipe } from '../separable-display.pipe';

describe('SeparableDisplayPipe', () => {
  let pipe: SeparableDisplayPipe;

  beforeEach(() => {
    pipe = new SeparableDisplayPipe();
  });

  describe('transform', () => {
    const tests = [
      { input: Separability.Separable, expectedUpper: "Separable", expectedLower: "separable" },
      { input: Separability.Inseparable, expectedUpper: "Inseparable", expectedLower: "inseparable" },
      { input: Separability.None, expectedUpper: undefined, expectedLower: undefined },
    ];

    tests.forEach(test => {
      it(`Should return ${test.expectedUpper} when the input is ${test.input}.`, () => {
        expect(pipe.transform(test.input)).toBe(test.expectedUpper);
      });

      it(`Should return ${test.expectedLower} when the input is ${test.input}.`, () => {
        expect(pipe.transform(test.input, false)).toBe(test.expectedLower);
      });
    });
  });
});
