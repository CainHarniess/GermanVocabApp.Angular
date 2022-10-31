import { Inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { NotificationService } from '../../../core';
import { LogService } from '../../../core/logging';

@Injectable({
  providedIn: 'root',
})
export class MatSnackBarService extends NotificationService {
  public constructor(private readonly logService: LogService,
    public readonly snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DEFAULT_OPTIONS) public readonly config: MatSnackBarConfig) {
    super();
    this.config = {
      "duration": 2000,
      data: undefined,
      panelClass: undefined,
    }
    this.logService.debug({ message: "Snack Bar Config", data: [this.config] });

  }

  public info(message: string): void {
    this.config.panelClass = "info-snackbar";
    this.logService.debug({ message: "Snack Bar Notification", data: [this.config] });
    this.snackBar.open(message, "X", this.config);
  }

  public success(message: string): void {
    this.config.panelClass = "success-snackbar";
    this.logService.debug({ message: "Snack Bar Notification", data: [this.config] });
    this.snackBar.open(message, "X", this.config);
  }

  public warn(message: string): void {
    this.config.panelClass = "warning-snackbar";
    this.logService.debug({ message: "Snack Bar Notification", data: [this.config] });
    this.snackBar.open(message, "X", this.config);
  }

  public error(message: string): void {
    this.config.panelClass = "error-snackbar";
    this.logService.debug({ message: "Snack Bar Notification", data: [this.config] });
    this.snackBar.open(message, "X", this.config);
  }
}
