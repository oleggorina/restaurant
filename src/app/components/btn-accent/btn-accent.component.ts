import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-accent',
  templateUrl: './btn-accent.component.html',
  styleUrls: ['./btn-accent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnAccentComponent {
  @Input() btnText: string = '';
  @Input() textColor: string = '';
}
