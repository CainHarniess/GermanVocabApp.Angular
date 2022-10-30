import { Injectable } from "@angular/core";
import { ConsoleLogFactory, ConsoleLogMethod, ConsoleLogWriter, Log, Logger } from "..";

@Injectable({
  providedIn: 'root'
})
export class ConsoleLogger extends Logger {
  constructor(private readonly writer: ConsoleLogWriter,
    private readonly actionFactory: ConsoleLogFactory) {
    super();
  }

  public log(log: Log): void {
    let method: ConsoleLogMethod = this.actionFactory.create(log);
    const message: string = this.writer.write(log)
    method(message);
  }
}
