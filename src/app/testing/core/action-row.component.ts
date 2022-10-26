import { Directive, Input } from '@angular/core';
import { AbstractErrorCommand } from '../commands';

@Directive()
export abstract class ActionRowComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public command!: AbstractErrorCommand;

  public executeCommand(): void {
    this.command.execute();
  }
}
