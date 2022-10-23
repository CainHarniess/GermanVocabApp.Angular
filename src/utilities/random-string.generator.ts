export class RandomStringGenerator {
  public withLength(length: number): string {
    const setSize: number = this.charSet.length;

    let output: string = "";

    for (let i: number = 0; i < length; i++) {
      const random: number = Math.floor(Math.random() * setSize)
      output += this.charSet.charAt(random);
    }
    return output;
  }

  private readonly charSet: string = "abcdefghijklmnopqrstuvwxyz";
}
