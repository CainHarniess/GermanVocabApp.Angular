import { SingleSelectOption } from "../../forms/single-select/single-select-option.interface";
import { WordType } from "../../vocab/models/data";

export const wordTypeOptions: SingleSelectOption<WordType>[] = [{
  value: WordType.Noun,
  label: "Noun",
}, {
  value: WordType.Verb,
  label: "Verb",
}, {
  value: WordType.Adjective,
  label: "Adjective",
}, {
  value: WordType.Adverb,
  label: "Adverb",
}];
