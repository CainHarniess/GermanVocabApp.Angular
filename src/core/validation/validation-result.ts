export class ValidationError {
  public constructor(public readonly name: string, public readonly message: string,
    public readonly required?: any, public readonly actual?: any) {

  }
}
