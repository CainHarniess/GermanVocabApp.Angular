import { fakeAsync } from "@angular/core/testing";
import { BadRequestCommand } from "..";

describe("BadRequestCommand", () => {
  let command: BadRequestCommand;
  let errorService: any = {
    throwBadRequest: () => { },
  };

  beforeEach(() => {
    command = new BadRequestCommand(errorService);
  });

  describe("canExecute$", () => {
    it("Should be true at initialisation.", fakeAsync(() => {
      command.canExecute$.subscribe((value: boolean) => {
        expect(value).toBeTrue();
      });
    }));
  });

  describe("execute", () => {
    it("Should call throwBadRequest on error service.", () => {
      spyOn(errorService, "throwBadRequest");
      console.log(errorService);
      command.execute();
      expect(errorService.throwBadRequest).toHaveBeenCalled();
    });
  });
});
