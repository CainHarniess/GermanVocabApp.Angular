import { ConsoleLogger, Log, Severity } from "../..";

describe(`${ConsoleLogger.name}`, () => {
  let logger: ConsoleLogger;
  let mockWriter: any;
  let mockActionFactory: any;
  let log: Log;
  let creationSpy: any;

  beforeEach(() => {
    mockWriter = {
      write: (log: Log) => "Test Message",
    };

    mockActionFactory = {
      create: (log: Log) => { },
    };

    creationSpy = spyOn(mockActionFactory, "create").and.returnValue((log: Log) => { });

    log = new Log({ message: "Test Log", }, Severity.Trace)

    logger = new ConsoleLogger(mockWriter, mockActionFactory);
  });

  describe("log", () => {
    it("Should call the action factory with the correct argument.", () => {
      logger.log(log);
      expect(mockActionFactory.create).toHaveBeenCalledOnceWith(log);
    });

    it("Should call the writer with the correct argument.", () => {
      spyOn(mockWriter, "write");
      logger.log(log);
      expect(mockWriter.write).toHaveBeenCalledOnceWith(log);
    });
  })
});
