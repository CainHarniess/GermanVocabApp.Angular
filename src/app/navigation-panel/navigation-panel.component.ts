import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApplicationRoutePath, TestingRoutePath, VocabRoutePath } from '../shared/routing';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPanelComponent {
  public readonly AppRoutePath: typeof ApplicationRoutePath = ApplicationRoutePath;
  public readonly VocabRoutePath: typeof VocabRoutePath = VocabRoutePath;
  public readonly TestingRoutePath: typeof TestingRoutePath = TestingRoutePath;
}
