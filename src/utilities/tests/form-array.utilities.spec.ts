import { validateIndex } from "..";

describe("FormArrayUtilities", () => {
  let mockFormArray: any;


  beforeEach(() => {
    mockFormArray = { length: 4 }
  });

  describe(`${validateIndex.name}`, () => {
    it("Should throw exception if invalid index is provided.", () => {
      expect(function () { validateIndex(-1, mockFormArray) }).toThrowError("Index may not be negative.");
    });

    it("Should not throw exception if index is valid.", () => {
      expect(function () { validateIndex(0, mockFormArray) }).not.toThrow();
      expect(function () { validateIndex(1, mockFormArray) }).not.toThrow();
    });

    it("Should throw exception if index provided is greater than the list items control length.", () => {
      expect(function () { validateIndex(5, mockFormArray) }).toThrowError("Index exceeds the size of the list items form control array.");
      expect(function () { validateIndex(6, mockFormArray) }).toThrowError("Index exceeds the size of the list items form control array.");
    });
  });
});
