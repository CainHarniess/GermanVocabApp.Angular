import { addOrAssign, isWellDefinedAndNonEmpty } from "..";

xdescribe("SubscriptionUtilities", () => {
  describe(`${addOrAssign.name}`, () => {
    it("Should do something.", () => {
      expect(isWellDefinedAndNonEmpty(null)).toBeFalse();
    });
  });
});
