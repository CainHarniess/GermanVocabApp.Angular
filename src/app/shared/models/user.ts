import { Entity } from ".";

export interface User extends Entity {
  firstName: string,
  surname: string,
  username: string,
  password: string,
}
