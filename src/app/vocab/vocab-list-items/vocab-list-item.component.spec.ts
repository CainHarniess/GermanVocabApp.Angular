import { WordType } from "../models/data";
import { VocabListItem } from "../models/vocab-list-item.interface";
import { VocabListItemComponent } from "./vocab-list-item.component";

describe(`${VocabListItemComponent.name}`, () => {
  let component: VocabListItemComponent;
  let mockItem: VocabListItem;

  beforeEach(() => {
    component = new VocabListItemComponent();
    mockItem = {
      wordType: WordType.Verb,
      english: "x",
      german: "y",
    }
    component.item = mockItem;
  });

  describe("isIrregular", () => {
    describe("Verb", () => {
      it("Should return true if the third-person present is well-defined", () => {
        mockItem.thirdPersonPresent = "z";
        expect(component.isIrregular).toBeTrue();
      });

      it("Should return false if the third-person present is undefined", () => {
        mockItem.thirdPersonPresent = undefined;
        expect(component.isIrregular).toBeFalse();
      });
    });

    describe("Adjective", () => {
      beforeEach(() => {
        mockItem.wordType = WordType.Adjective;
      });

      it("Should return true if the comparative is well-defined", () => {
        mockItem.comparative = "z";
        expect(component.isIrregular).toBeTrue();
      });

      it("Should return false if the comparative is undefined", () => {
        mockItem.comparative = undefined;
        expect(component.isIrregular).toBeFalse();
      });
    });

    describe("Adverb", () => {
      beforeEach(() => {
        mockItem.wordType = WordType.Adverb;
      });

      it("Should return true if the comparative is well-defined", () => {
        mockItem.comparative = "z";
        expect(component.isIrregular).toBeTrue();
      });

      it("Should return false if the comparative is undefined", () => {
        mockItem.comparative = undefined;
        expect(component.isIrregular).toBeFalse();
      });
    });

    describe("Noun", () => {
      beforeEach(() => {
        mockItem.wordType = WordType.Noun;
      });

      it("Should return false", () => {
        expect(component.isIrregular).toBeFalse();
      });
    });
  });
});
