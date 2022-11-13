import { waitForAsync } from "@angular/core/testing";
import { User } from "../../../shared/models";
import { UserCredentials } from "../../models";
import { InMemoryAuthenticationService } from "../in-memory-authentication.service";

describe(`${InMemoryAuthenticationService.name}`, () => {
  let service: InMemoryAuthenticationService;
  let dataProvider: any;
  const validUser: User = {
    id: "c242a5ef-371d-4eb6-a1e2-c236dbd3211b",
    firstName: "Cain",
    surname: "Harniess",
    username: "CainHarniess",
    password: "password",
  };

  beforeEach(() => {
    dataProvider = {
      provide: () => [validUser]
    };

    service = new InMemoryAuthenticationService(dataProvider);
  });

  describe("authenticate", () => {
    it("Should return false if there is no user with the given username.", waitForAsync(() => {
      const credentials: UserCredentials = {
        username: "ChrisAllen",
        password: "password1",
      };
      service.authenticate(credentials).subscribe((result: User | undefined) => {
        expect(result).toBeUndefined();
      });
    }));

    it("Should return false if the password is incorrect.", waitForAsync(() => {
      const credentials: UserCredentials = {
        username: validUser.username,
        password: "nigel",
      };
      service.authenticate(credentials).subscribe((result: User | undefined) => {
        expect(result).toBeUndefined();
      });
    }));

    it("Should return true if the credentials match.", waitForAsync(() => {
      const credentials: UserCredentials = {
        username: validUser.username,
        password: validUser.password,
      };
      service.authenticate(credentials).subscribe((result: User | undefined) => {
        expect(result).toBeDefined();
      });
    }));
  });
});
