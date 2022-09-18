import { Vague } from "../core/types";
import { isNullOrUndefined } from "./object.utilities";

export function isWellDefinedAndNonEmpty(value: Vague<string>): boolean {
  return !isNullOrUndefined(value) && value !== "";
}
