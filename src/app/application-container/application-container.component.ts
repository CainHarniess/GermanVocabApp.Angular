import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event, EventName, EventService } from '../../core/events';

@Component({
  selector: 'app-container',
  templateUrl: './application-container.component.html',
  styleUrls: ['./application-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationContainerComponent {
  constructor(private readonly router: Router,
    private readonly eventService: EventService) {

  }

  public toggleSideNav(): void {
    this.eventService.emit(new Event(EventName.SideNavToggle, void 0));
  }
}
