import { isWellDefinedAndNonEmpty } from "../../../utilities/string.utilities";

import { VocabListItem } from "../models";
import { WordType } from "../models/data";

export function isIrregular(listItem?: VocabListItem): boolean {
  return isIrregularVerb(listItem) || isIrregularModifier(listItem);
}

export function isIrregularVerb(listItem?: VocabListItem): boolean {
  if (!listItem) {
    return false;
  }

  if (listItem.wordType != WordType.Verb) {
    return false;
  }
  return isWellDefinedAndNonEmpty(listItem.thirdPersonPresent) || isWellDefinedAndNonEmpty(listItem.thirdPersonImperfect)
    || isWellDefinedAndNonEmpty(listItem.perfect);
}

export function isIrregularModifier(listItem?: VocabListItem): boolean {
  if (!listItem) {
    return false;
  }

  if (listItem.wordType != WordType.Adjective && listItem.wordType != WordType.Adverb) {
    return false;
  }

  return isWellDefinedAndNonEmpty(listItem.comparative) || isWellDefinedAndNonEmpty(listItem.superlative);
}
