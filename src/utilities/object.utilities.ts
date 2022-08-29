export function isNullOrUndefined(object: any): boolean {
  return isNull(object) || isUndefined(object);
}

export function isNull(object: any): boolean {
  return object === null;
}

export function isUndefined(object: any): boolean {
  return object === undefined;
}
