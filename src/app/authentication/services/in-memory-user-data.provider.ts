import { Injectable } from "@angular/core";
import { cainUserId, ilkaUserId } from "../../shared/data/users";
import { User } from "../../shared/models";

@Injectable()
export class InMemoryUserDataProvider {
  public provide(): User[] {
    return [
      {
        id: cainUserId,
        firstName: "Cain",
        surname: "Harniess",
        username: "CainHarniess",
        password: "password",
      }, {
        id: ilkaUserId,
        firstName: "Ilka",
        surname: "Barenscheer",
        username: "illibar_95",
        password: "password",
      }];
  }
}
