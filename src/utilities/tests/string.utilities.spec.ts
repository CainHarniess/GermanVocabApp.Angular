import { isWellDefinedAndNonEmpty } from "..";

describe("StringUtilities", () => {
  describe("isWellDefinedAndNonEmpty", () => {
    it("Should return false if object is null.", () => {
      expect(isWellDefinedAndNonEmpty(null)).toBeFalse();
    });

    it("Should return false if object is undefined.", () => {
      expect(isWellDefinedAndNonEmpty(undefined)).toBeFalse();
    });

    it("Should return false if object is the empty string.", () => {
      expect(isWellDefinedAndNonEmpty("")).toBeFalse();
    });

    it("Should return true if object well defined and not the empty string.", () => {
      expect(isWellDefinedAndNonEmpty("a")).toBeTrue();
    });
  });
});
