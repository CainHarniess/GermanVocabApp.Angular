import { Observable } from "rxjs";

export interface Command {
  canExecute$: Observable<boolean>;
  execute: () =>  void;
}
