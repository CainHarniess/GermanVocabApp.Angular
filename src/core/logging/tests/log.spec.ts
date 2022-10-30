import { Log, Severity } from "..";

describe(`${Log.name}`, () => {
  let log: Log;
  let content: any;

  describe("constructor", () => {
    it("Should throw error if no message is provided.", () => {
      content = { };
      expect(function () { log = new Log(content, Severity.Trace); }).toThrowError();
    });

    it("Should not throw error if message is provided.", () => {
      content = { message: "Hi" };
      expect(function () { log = new Log(content, Severity.Trace); }).not.toThrowError();
    });
  });
});
