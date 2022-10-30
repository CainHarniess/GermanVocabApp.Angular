import { Injectable } from "@angular/core";
import { ConsoleLogMethod, Log, Severity } from "..";

@Injectable({
  providedIn: 'root'
})
export class ConsoleLogFactory {
  public create(log: Log): ConsoleLogMethod {
    switch (log.severity) {
      case Severity.Trace: return console.log;
      case Severity.Debug: return console.debug;
      case Severity.Information: return console.info;
      case Severity.Warning: return console.warn;
      case Severity.Error: return console.error;
      case Severity.Fatal: return console.error;
      case Severity.None: return console.log
      default: throw new Error(`Invalid severity value ${log.severity}.`)
    }
  }
}
