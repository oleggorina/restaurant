import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeroComponent {

}
