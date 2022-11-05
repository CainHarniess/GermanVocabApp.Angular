import { ConsoleLogWriter, Log, Severity } from "../..";

describe(`${ConsoleLogWriter.name}`, () => {
  let writer: ConsoleLogWriter;
  let severityConverter: any;
  let log: Log;

  const message: string = "Hi there";
  const reason: string = "Bad code.";
  const fix: string = "Better code.";
  const severity: Severity = Severity.Fatal;
  const data: any[] = ["blah", 2];

  beforeEach(() => {
    severityConverter = {
      convert: (severity: Severity) => "Dummy",
    };
    writer = new ConsoleLogWriter(severityConverter);
  });

  describe("write", () => {
    it(`Should contain message and severity only.`, () => {
      log = new Log({ message: message }, severity)
      const result: string = writer.write(log);
      expect(result).toContain(`DUMMY`);
      expect(result).toContain(`${message}`);
      expect(result).not.toContain(fix);
      expect(result).not.toContain(reason);
      expect(result).not.toContain(`${data[0]}`, `${data[1]}`);
    });

    it(`Should contain message, reason, and severity only.`, () => {
      log = new Log({ message: message, reason: reason }, severity)

      const result: string = writer.write(log);

      expect(result).toContain(`DUMMY`);
      expect(result).toContain(`${message}`);
      expect(result).not.toContain(fix);
      expect(result).toContain(reason);
      expect(result).not.toContain(`${data[0]}`, `${data[1]}`);
    });

    it(`Should contain message, reason, fix, and severity only.`, () => {
      log = new Log({ message: message, reason: reason, fix: fix }, severity)

      const result: string = writer.write(log);

      expect(result).toContain(`DUMMY`);
      expect(result).toContain(`${message}`);
      expect(result).toContain(fix);
      expect(result).toContain(reason);
      expect(result).not.toContain(`${data[0]}`, `${data[1]}`);
    });

    it(`Should contain message, reason, fix, data, and severity only.`, () => {
      log = new Log({ message: message, reason: reason, fix: fix, data: data }, severity)

      const result: string = writer.write(log);

      expect(result).toContain(`DUMMY`);
      expect(result).toContain(`${message}`);
      expect(result).toContain(fix);
      expect(result).toContain(reason);
      expect(result).toContain(`${data[0]}`, `${data[1]}`);
    });
  });
});
