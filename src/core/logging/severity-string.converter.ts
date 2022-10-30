import { Injectable } from "@angular/core";
import { Severity } from ".";

@Injectable({
  providedIn: 'root'
})
export class SeverityStringConverter {
  private readonly logLevels: Map<Severity, string> = new Map([
    [Severity.None, "NONE"],
    [Severity.Trace, "TRACE"],
    [Severity.Debug, "DEBUG"],
    [Severity.Information, "INFORMATION"],
    [Severity.Warning, "WARNING"],
    [Severity.Error, "ERROR"],
    [Severity.Fatal, "FATAL"],
  ]);

  public convert(severity: Severity): string {
    const label: string | undefined = this.logLevels.get(severity);

    if (!label) {
      throw new Error(`Key ${severity} not found in map.`);
    }
    return label;
  }
}
