import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive()
export abstract class ActionRowComponent {
  @Input() public title!: string;
  @Input() public description!: string;

  @Output() public readonly action = new EventEmitter<any>();
  public act(): void {
    this.action.emit();
  }
}
