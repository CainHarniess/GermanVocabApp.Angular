import { isNullOrUndefined } from "../utilities";

export type Null<T> = T | null;
export type Undefined<T> = T | undefined;
export type Vague<T> = T | undefined| null;

//export class Option<T> {
//  constructor(public readonly value: Vague<T>) {

//  }

//  public get isWellDefined(): boolean {
//    return !isNullOrUndefined(this.value);
//  }
//}
