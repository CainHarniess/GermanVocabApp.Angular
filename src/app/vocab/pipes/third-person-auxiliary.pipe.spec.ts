import { AuxiliaryVerb } from '../models/data';
import { ThirdPersonAuxiliaryPipe } from './third-person-auxiliary.pipe';

describe('ThirdPersonAuxiliaryPipe', () => {
  let pipe: ThirdPersonAuxiliaryPipe;

  beforeEach(() => {
    pipe = new ThirdPersonAuxiliaryPipe();
  });

  describe("transform", () => {
    const testData = [
      { input: AuxiliaryVerb.Haben, expected: "hat" },
      { input: AuxiliaryVerb.Sein, expected: "ist" },
      { input: undefined, expected: undefined },
      { input: null, expected: undefined },
    ];

    testData.forEach(test => {
      it(`Should return ${test.expected} when the input is ${test.input}.`, () => {
        expect(pipe.transform(test.input)).toBe(test.expected);
      });
    });
  });
});
