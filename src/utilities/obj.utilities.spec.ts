import { isNull, isNullOrUndefined, isUndefined, isWellDefined } from "./object.utilities";

describe("ObjectUtilities", () => {
  describe("isNullOrUndefined", () => {
    it("Should return true if object is null.", () => {
      expect(isNullOrUndefined(null)).toBeTrue();
    });

    it("Should return true if object is undefined.", () => {
      expect(isNullOrUndefined(undefined)).toBeTrue();
    });

    it("Should return false if object is neither null not undefined.", () => {
      expect(isNullOrUndefined(1)).toBeFalse();
    });
  });

  describe("isNull", () => {
    it("Should return true if object is null.", () => {
      expect(isNull(null)).toBeTrue();
    });

    it("Should return false if object is undefined.", () => {
      expect(isNull(undefined)).toBeFalse();
    });

    it("Should return false if object is well-defined.", () => {
      expect(isNull(1)).toBeFalse();
    });
  });

  describe("isUndefined", () => {
    it("Should return false if object is null.", () => {
      expect(isUndefined(null)).toBeFalse();
    });

    it("Should return true if object is undefined.", () => {
      expect(isUndefined(undefined)).toBeTrue();
    });

    it("Should return false if object is well-defined.", () => {
      expect(isUndefined(1)).toBeFalse();
    });
  });

  describe("isWellDefined", () => {
    it("Should return false if object is null.", () => {
      expect(isWellDefined(null)).toBeFalse();
    });

    it("Should return false if object is undefined.", () => {
      expect(isWellDefined(undefined)).toBeFalse();
    });

    it("Should return true if object is neither null not undefined.", () => {
      expect(isWellDefined(1)).toBeTrue();
    });
  });
});
