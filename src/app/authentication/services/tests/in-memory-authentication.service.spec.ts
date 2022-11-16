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
  const validCredentials: UserCredentials = {
    username: validUser.username,
    password: validUser.password,
  };

  beforeEach(() => {
    dataProvider = {
      provide: () => [validUser]
    };

    service = new InMemoryAuthenticationService(dataProvider);
  });

  describe("isAuthenticated", () => {
    it("Should return false if the current user is undefined.", () => {
      expect(service.isAuthenticated).toBeFalse();
    });

    it("Should return true if the current user is defined.", fakeAsync(() => {
      service.authenticate(validCredentials).subscribe((result: User | undefined) => { });
      tick(service.delayMs);
      expect(service.isAuthenticated).toBeTrue();
    }));
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
      tick(service.delayMs);
    }));

    it("Should return undefined if the password is incorrect.", fakeAsync(() => {
      const credentials: UserCredentials = {
        username: validUser.username,
        password: "nigel",
      };
      service.authenticate(credentials).subscribe((result: User | undefined) => {
        expect(result).toBeUndefined();
      });
      tick(service.delayMs);
    }));

    it("Should return the user if the credentials match.", fakeAsync(() => {
      const credentials: UserCredentials = {
        username: validUser.username,
        password: validUser.password,
      };
      service.authenticate(credentials).subscribe((result: User | undefined) => {
        expect(result).toBeDefined();
      });
      tick(service.delayMs);
    }));

    it("Should set the current user property if the credentials match.", fakeAsync(() => {
      service.authenticate(validCredentials).subscribe((result: User | undefined) => {
        expect(service.currentUser).toBe(validUser);
      });
      tick(service.delayMs);
    }));
  });

  describe("logOut", () => {
    it("Should return undefined if the current user is undefined.", fakeAsync(() => {
      service.logOut().subscribe((loggedOutUser: User | undefined) => {
        expect(loggedOutUser).toBeUndefined();
      });
    }));

    it("Should return the current user if it is defined.", fakeAsync(() => {
      service.authenticate(validCredentials);
      service.logOut().subscribe((loggedOutUser: User | undefined) => {
        expect(loggedOutUser).toBe(validUser);
      });
    }));
  });
});
