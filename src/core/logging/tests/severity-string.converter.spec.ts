import { Severity } from "..";
import { SeverityStringConverter } from "../severity-string.converter";

describe(`${SeverityStringConverter.name}`, () => {
  let converter: SeverityStringConverter;

  beforeEach(() => {
    converter = new SeverityStringConverter();
  });

  describe("convert", () => {
    it("Should throw error if severity value is invalid.", () => {
      expect(function () { converter.convert(99) }).toThrowError();
    });

    it("Return the correct string value for None.", () => {
      const result: string = converter.convert(Severity.None);
      expect(result).toBe("NONE");
    });

    it("Return the correct string value for Trace.", () => {
      const result: string = converter.convert(Severity.Trace);
      expect(result).toBe("TRACE");
    });

    it("Return the correct string value for Debug.", () => {
      const result: string = converter.convert(Severity.Debug);
      expect(result).toBe("DEBUG");
    });

    it("Return the correct string value for Information.", () => {
      const result: string = converter.convert(Severity.Information);
      expect(result).toBe("INFORMATION");
    });

    it("Return the correct string value for Warning.", () => {
      const result: string = converter.convert(Severity.Warning);
      expect(result).toBe("WARNING");
    });

    it("Return the correct string value for Error.", () => {
      const result: string = converter.convert(Severity.Error);
      expect(result).toBe("ERROR");
    });

    it("Return the correct string value for Fatal.", () => {
      const result: string = converter.convert(Severity.Fatal);
      expect(result).toBe("FATAL");
    });
  });
});
