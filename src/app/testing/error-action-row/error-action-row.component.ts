import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractErrorCommand } from '../commands';

@Component({
  selector: 'testing-error-action-row',
  templateUrl: './error-action-row.component.html',
  styleUrls: ['./error-action-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorActionRowComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public command!: AbstractErrorCommand;

  public executeCommand(): void {
    this.command.execute();
  }
}
