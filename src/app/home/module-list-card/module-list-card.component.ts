import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'module-list-card',
  templateUrl: './module-list-card.component.html',
  styleUrls: ['./module-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModuleListCardComponent {
  @Input() public name!: string;
  @Input() public description!: string;
  @Input() public disabled: boolean = false;
}
