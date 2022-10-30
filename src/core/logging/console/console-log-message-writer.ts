import { Injectable } from "@angular/core";
import { Log, SeverityStringConverter } from "..";

@Injectable({
  providedIn: 'root'
})
export class ConsoleLogWriter {
  public constructor(private readonly severityConverter: SeverityStringConverter) {

  }

  public write(log: Log): string {
    let output: string = "";

    const severityLabel: string = this.severityConverter.convert(log.severity);
    output += this.tryAppendLine(output, severityLabel.toUpperCase());
    output += this.tryAppendLine(output, log.message);
    output += this.tryAppendLine(output, log.reason);
    output += this.tryAppendLine(output, log.fix);

    output += this.tryAppendData(output, log.data);

    return output;
  }

  private tryAppendLine(text: string, append?: string): string {
    if (!append) {
      return "";
    }
    return `${append}\r\n`;
  }

  private tryAppendData(text: string, data: any[] | undefined): string {
    if (!data || data.length === 0) {
      return "";
    }

    let dataString: string = "";
    for (let i: number = 0; i < data.length; i++) {
      dataString += `${JSON.stringify(data[i])}\r\n`;
    }
    return dataString;
  }
}
