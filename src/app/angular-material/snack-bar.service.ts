import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MatSnackBarService {
  constructor(public readonly snackBar: MatSnackBar) {

  }

  public info(message: string): void {
    this.snackBar.open(message, "", { panelClass: ["info"] });
  }

  public success(message: string): void {
    this.snackBar.open(message, "", { panelClass: ["success"] });
  }

  public warn(message: string): void {
    this.snackBar.open(message, "", { panelClass: ["warning"] });
  }

  public error(message: string): void {
    this.snackBar.open(message, "", { panelClass: ["error"]});
  }
}
