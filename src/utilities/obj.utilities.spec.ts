import { isNullOrUndefined } from "./object.utilities";

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
});
