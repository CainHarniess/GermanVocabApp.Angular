import { Inject, Injectable } from '@angular/core';
import { Log, LogContent, Logger, Severity } from '.';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public constructor(@Inject("minLevel") public readonly minLevel: Severity,
    protected readonly logger: Logger) {

  }

  public trace(content: LogContent): void {
    if (Severity.Trace < this.minLevel) {
      return;
    }
    const log: Log = new Log(content, Severity.Trace);
    this.logger.log(log);
  }

  public debug(content: LogContent): void {
    if (Severity.Debug < this.minLevel) {
      return;
    }
    const log: Log = new Log(content, Severity.Debug);
    this.logger.log(log);
  }

  public inform(content: LogContent): void {
    if (Severity.Information < this.minLevel) {
      return;
    }
    const log: Log = new Log(content, Severity.Information);
    this.logger.log(log);
  }

  public warn(content: LogContent): void {
    if (Severity.Warning < this.minLevel) {
      return;
    }
    const log: Log = new Log(content, Severity.Warning);
    this.logger.log(log);
  }

  public error(content: LogContent): void {
    if (Severity.Error < this.minLevel) {
      return;
    }
    const log: Log = new Log(content, Severity.Error);
    this.logger.log(log);
  }

  public fatal(content: LogContent): void {
    if (Severity.Fatal < this.minLevel) {
      return;
    }
    const log: Log = new Log(content, Severity.Fatal);
    this.logger.log(log);
  }
}
