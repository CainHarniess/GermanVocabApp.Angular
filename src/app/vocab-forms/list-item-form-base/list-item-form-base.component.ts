import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemFormBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
