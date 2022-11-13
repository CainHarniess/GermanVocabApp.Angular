import { Injectable } from "@angular/core";
import { User } from "../../shared/models";

@Injectable()
export class InMemoryUserDataProvider {
  public provide(): User[] {
    return [
      {
        id: "c242a5ef-371d-4eb6-a1e2-c236dbd3211b",
        firstName: "Cain",
        surname: "Harniess",
        username: "CainHarniess",
        password: "password",
      }, {
        id: "e15f80fd-b88e-44b8-a386-15144331e440",
        firstName: "Ilka",
        surname: "Barenscheer",
        username: "illibar_95",
        password: "password",
      }];
  }
}
