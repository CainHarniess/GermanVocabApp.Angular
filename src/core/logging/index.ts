export { Severity } from "./severity.enum";
export { SeverityStringConverter } from "./severity-string.converter";
export { LogContent } from "./log-content";
export { Log } from "./log";
export { Logger } from "./logger";
export { ConsoleLogger } from "./console/console.logger";
export { ConsoleLogWriter } from "./console/console-log-message-writer";
export { ConsoleLogFactory } from "./console/console-log.factory";
export { LogService } from "./log.service";

export type ConsoleLogMethod = (message: string) => void
