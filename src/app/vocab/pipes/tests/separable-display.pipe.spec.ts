import { SeparableDisplayPipe } from '../separable-display.pipe';

describe('SeparableDisplayPipe', () => {
  let pipe: SeparableDisplayPipe;

  beforeEach(() => {
    pipe = new SeparableDisplayPipe();
  });

  describe('transform', () => {
    const tests = [
      { input: true, expected: "Separable" },
      { input: false, expected: "Inseparable" },
      { input: undefined, expected: undefined },
      { input: null, expected: undefined },
    ];

    tests.forEach(test => {
      it(`Should return ${test.expected} when the input is ${test.input}.`, () => {
        expect(pipe.transform(test.input)).toBe(test.expected);
      });
    });
  });
});
