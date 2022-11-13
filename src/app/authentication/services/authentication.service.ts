import { Observable } from "rxjs";
import { UserCredentials } from "../models";

export abstract class AuthenticationService {
  public abstract authenticate(userCredentials: UserCredentials): Observable<boolean>;
}
