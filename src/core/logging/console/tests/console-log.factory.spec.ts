import { ConsoleLogFactory, Log, Severity } from "../..";
type TestCase = { input: Severity, expected: Function };

describe(`${ConsoleLogFactory.name}`, () => {
  let factory: ConsoleLogFactory;
  let tests: TestCase[] = [
    { input: Severity.None, expected: console.log },
    { input: Severity.Trace, expected: console.log },
    { input: Severity.Debug, expected: console.debug },
    { input: Severity.Information, expected: console.info },
    { input: Severity.Warning, expected: console.warn },
    { input: Severity.Error, expected: console.error },
    { input: Severity.Fatal, expected: console.error },
  ];
  const dummyMessage: string = "Test";
  let log: Log;

  beforeEach(() => {
    factory = new ConsoleLogFactory();
  });

  describe("create", () => {
    for (let i: number = 0; i < tests.length; i++) {
      const test: TestCase = tests[i];
      it(`Should return correct logging function when severity is ${test.input}.`, () => {
        log = new Log({ message: dummyMessage }, test.input);
        expect(factory.create(log)).toBe(test.expected);
      });
    }

    it(`Should throw an error for invalid severity.`, () => {
      log = new Log({ message: dummyMessage }, 99);
      expect(function () { factory.create(log); }).toThrowError();
    });
  })
});
