import { Transitivity } from '../../models/data';
import { TransitiveDisplayPipe } from '../transitive-display.pipe';

describe('TransitiveDisplayPipe', () => {
  let pipe: TransitiveDisplayPipe;

  beforeEach(() => {
    pipe = new TransitiveDisplayPipe();
  });

  describe('transform', () => {
    const tests = [
      { input: Transitivity.Transitive, expected: Transitivity.Transitive },
      { input: Transitivity.Intransitive, expected: Transitivity.Intransitive },
      { input: Transitivity.Both, expected: "Both transitive and intransitive" },
      { input: null, expected: undefined },
      { input: undefined, expected: undefined },
    ];

    tests.forEach(test => {
      it(`Should return ${test.expected} when the input is ${test.input}.`, () => {
        expect(pipe.transform(test.input)).toEqual(test.expected);
      });
    });
  });
});
