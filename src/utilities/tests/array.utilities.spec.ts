import { makeArray } from "..";

describe("ArrayUtilities", () => {
  describe("makeArray", () => {
    it("Should return an array of length one when a single item is provided.", () => {
      expect(makeArray(1).length).toEqual(1);
    });

    it("Should return an array with correct element when a single item is provided.", () => {
      expect(makeArray(1)).toEqual([1]);
    });

    it("Should return an empty array when null is provided.", () => {
      expect(makeArray(null)).toEqual([]);
    });

    it("Should return an array of the correct size when an array is provided.", () => {
      expect(makeArray([1,2,3,4,5]).length).toEqual(5);
    });

    it("Should return an array with the correct elements when an array is provided.", () => {
      expect(makeArray([1, 2, 3, 4, 5])).toEqual([1,2,3,4,5]);
    });
  });
});
