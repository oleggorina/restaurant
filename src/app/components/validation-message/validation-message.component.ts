import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationMessageComponent {
  @Input() message: string = '';
}
