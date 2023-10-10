import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-image',
  templateUrl: './menu-image.component.html',
  styleUrls: ['./menu-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuImageComponent {
  @Input() image: string = '';
}
