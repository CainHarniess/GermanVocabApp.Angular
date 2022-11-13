import { Observable } from "rxjs";
import { User } from "../../shared/models";
import { UserCredentials } from "../models";

export abstract class AuthenticationService {
  public abstract get currentUser(): User | undefined;
  public abstract get isAuthenticated(): boolean;
  public abstract authenticate(userCredentials: UserCredentials): Observable<User | undefined>;
}
