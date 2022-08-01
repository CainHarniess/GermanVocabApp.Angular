import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModulesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
