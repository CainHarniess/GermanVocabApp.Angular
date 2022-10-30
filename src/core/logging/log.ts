import { LogContent, Severity } from ".";

export class Log {
  public readonly message?: string;
  public readonly reason?: string;
  public readonly fix?: string;
  public readonly data?: any[]
  public readonly severity: Severity;

  constructor(logEntry: LogContent, severity: Severity) {
    if (!logEntry.message) {
      throw new Error("Unable to to create a log with no message.");
    }

    this.message = logEntry.message;
    this.reason = logEntry.reason;
    this.fix = logEntry.fix;
    this.data = logEntry.data;
    this.severity = severity;
  }
}
