import { ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialsComponent {
  @Input() textColor: string = 'white';
}
