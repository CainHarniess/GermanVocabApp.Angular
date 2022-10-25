import { fakeAsync } from "@angular/core/testing";
import { ClientErrorCommand } from "..";

describe("ClientErrorCommand", () => {
  let command: ClientErrorCommand;
  let errorService: any = {
    throwClientError: () => { },
  };

  beforeEach(() => {
    command = new ClientErrorCommand(errorService);
  });

  describe("canExecute$", () => {
    it("Should be true at initialisation.", fakeAsync(() => {
      command.canExecute$.subscribe((value: boolean) => {
        expect(value).toBeTrue();
      });
    }));
  });

  describe("execute", () => {
    it("Should call throwClientError on error service.", () => {
      spyOn(errorService, "throwClientError");
      console.log(errorService);
      command.execute();
      expect(errorService.throwClientError).toHaveBeenCalled();
    });
  });
});
