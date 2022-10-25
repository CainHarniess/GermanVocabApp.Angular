import { fakeAsync } from "@angular/core/testing";
import { UnauthorisedCommand } from "..";

describe("UnauthorisedCommand", () => {
  let command: UnauthorisedCommand;
  let errorService: any = {
    throwUnauthorised: () => { },
  };

  beforeEach(() => {
    command = new UnauthorisedCommand(errorService);
  });

  describe("canExecute$", () => {
    it("Should be true at initialisation.", fakeAsync(() => {
      command.canExecute$.subscribe((value: boolean) => {
        expect(value).toBeTrue();
      });
    }));
  });

  describe("execute", () => {
    it("Should call throwUnauthorised on error service.", () => {
      spyOn(errorService, "throwUnauthorised");
      console.log(errorService);
      command.execute();
      expect(errorService.throwUnauthorised).toHaveBeenCalled();
    });
  });
});
