import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'testing-action-row',
  templateUrl: './action-row.component.html',
  styleUrls: ['./action-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionRowComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public buttonColour!: string;
  @Input() public buttonText!: string;

  @Output() public readonly action = new EventEmitter<any>();
  public act(): void {
    this.action.emit();
  }

  public get isWarning(): boolean {
    return this.buttonColour === "warning";
  }
}
