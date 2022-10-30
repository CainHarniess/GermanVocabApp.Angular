import { Log } from ".";

export abstract class Logger {
  public abstract log(log: Log): void;
}
