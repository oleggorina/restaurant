import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnPrimaryComponent {
  @Input() btnText: string ='';
  @Input() textColor: string ='';
}
