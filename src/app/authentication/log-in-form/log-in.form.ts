import { FormControl } from "@angular/forms";
import { Null } from "../../../core/types";

export interface LogInForm {
  username: FormControl<Null<string>>;
  password: FormControl<Null<string>>;
}
