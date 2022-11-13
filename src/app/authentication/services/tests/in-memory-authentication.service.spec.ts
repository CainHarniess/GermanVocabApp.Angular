import { fakeAsync, tick, waitForAsync } from "@angular/core/testing";
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
    it("Should return undefined if there is no user with the given username.", fakeAsync(() => {
      const credentials: UserCredentials = {
        username: "ChrisAllen",
        password: "password1",
      };
      service.authenticate(credentials).subscribe((result: User | undefined) => {
        expect(result).toBeUndefined();
      });
      tick(500);
    }));

    it("Should return undefined if the password is incorrect.", fakeAsync(() => {
      const credentials: UserCredentials = {
        username: validUser.username,
        password: "nigel",
      };
      service.authenticate(credentials).subscribe((result: User | undefined) => {
        expect(result).toBeUndefined();
      });
      tick(500);
    }));

    it("Should return the user if the credentials match.", fakeAsync(() => {
      const credentials: UserCredentials = {
        username: validUser.username,
        password: validUser.password,
      };
      service.authenticate(credentials).subscribe((result: User | undefined) => {
        expect(result).toBeDefined();
      });
      tick(500);
    }));

    it("Should set the current user property if the credentials match.", fakeAsync(() => {
      const credentials: UserCredentials = {
        username: validUser.username,
        password: validUser.password,
      };
      service.authenticate(credentials).subscribe((result: User | undefined) => {
        expect(service.currentUser).toBe(validUser);
      });
      tick(500);
    }));
  });
});
