import { Log, Logger, Severity } from "..";
import { LogContent } from "../log-content";
import { LogService } from "../log.service";

describe(`${LogService.name}`, () => {
  describe("trace", () => {
    let lowerLevels: Severity[] = [Severity.None, Severity.Trace]
    let higherLevels: Severity[] = [
      Severity.Debug, Severity.Information,
      Severity.Warning, Severity.Error,
      Severity.Fatal,
    ];
    runTests(lowerLevels, higherLevels);
  });

  describe("debug", () => {
    let lowerLevels: Severity[] = [
      Severity.None, Severity.Trace,
      Severity.Debug,
    ]
    let higherLevels: Severity[] = [
      Severity.Information, Severity.Warning,
      Severity.Error, Severity.Fatal,
    ];
    runTests(lowerLevels, higherLevels);
  });

  describe("information", () => {
    let lowerLevels: Severity[] = [
      Severity.None, Severity.Trace,
      Severity.Debug, Severity.Information,]
    let higherLevels: Severity[] = [
      Severity.Warning, Severity.Error,
      Severity.Fatal,
    ];
    runTests(lowerLevels, higherLevels);
  });

  describe("warning", () => {
    let lowerLevels: Severity[] = [
      Severity.None, Severity.Trace,
      Severity.Debug, Severity.Information,
      Severity.Warning,]
    let higherLevels: Severity[] = [
      Severity.Error, Severity.Fatal,
    ];
    runTests(lowerLevels, higherLevels);
  });

  describe("error", () => {
    let lowerLevels: Severity[] = [
      Severity.None, Severity.Trace,
      Severity.Debug, Severity.Information,
      Severity.Warning, Severity.Error, ]
    let higherLevels: Severity[] = [
      Severity.Fatal,
    ];
    runTests(lowerLevels, higherLevels);
  });

  describe("fatal", () => {
    let lowerLevels: Severity[] = [
      Severity.None, Severity.Trace,
      Severity.Debug, Severity.Information,
      Severity.Warning, Severity.Error, Severity.Fatal]

    let logger: Logger = {
      log: (log: Log) => { },
    };
    const testLogLevel: Severity = lowerLevels[lowerLevels.length - 1]!;
    const loggerLevel: Severity = Severity.Fatal;
    const logService = new LogService(loggerLevel, logger);
    let logContent: LogContent = { message: "Test Log", };

    for (let i: number = 0; i < lowerLevels.length; i++) {
      it(`Should not log if test level ${testLogLevel} is below the minimum log level ${loggerLevel}.`, () => {
        spyOn(logger, "log");
        logService.fatal(logContent);
        expect(logger.log).toHaveBeenCalled();
      });
    }
  });
});

function runTests(lowerLevels: Severity[], higherLevels: Severity[]): void {
  let logger: Logger = {
    log: (log: Log) => { },
  };
  let logContent: LogContent = { message: "Test Log", };
  const testLogLevel: Severity = lowerLevels[lowerLevels.length - 1]!;

  testShouldLog(higherLevels, logger, testLogLevel, logContent);

  testShouldNotLog(lowerLevels, logger, testLogLevel, logContent);
}

function testShouldLog(higherLevels: Severity[], logger: Logger, testLogLevel: Severity, logContent: LogContent) {
  for (let i: number = 0; i < higherLevels.length; i++) {
    const loggerLevel: Severity = higherLevels[i] as Severity;
    const logService = new LogService(loggerLevel, logger);
    const testAction = getLogAction(testLogLevel, logService, logContent);

    it(`Should not log if test level ${testLogLevel} is below the minimum log level ${loggerLevel}.`, () => {
      spyOn(logger, "log");
      testAction(logContent);
      expect(logger.log).not.toHaveBeenCalled();
    });
  }
}

function testShouldNotLog(lowerLevels: Severity[], logger: Logger, testLogLevel: Severity, logContent: LogContent) {
  for (let i: number = 0; i < lowerLevels.length; i++) {
    const loggerLevel: Severity = lowerLevels[i] as Severity;
    const logService = new LogService(loggerLevel, logger);
    const testAction: (content: LogContent) => void = getLogAction(testLogLevel, logService, logContent);

    it(`Should log if test log level ${testLogLevel} is greater or equal to the minimum log level ${loggerLevel}`, () => {
      spyOn(logger, "log");
      testAction(logContent);
      expect(logger.log).toHaveBeenCalled();
    });
  }
}

function getLogAction(severity: Severity, logService: LogService, content: LogContent): (content: LogContent) => void {
  switch (severity) {
    case Severity.Trace: return function () { logService.trace(content) };
    case Severity.Debug: return function () { logService.debug(content) };
    case Severity.Information: return function () { logService.inform(content) };
    case Severity.Warning: return function () { logService.warn(content) };
    case Severity.Error: return function () { logService.error(content) };
    case Severity.Fatal: return function () { logService.error(content) };
    default: throw new Error(`Invalid severity value ${severity}.`)
  }
}
