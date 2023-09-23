import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-btn-form',
  templateUrl: './btn-form.component.html',
  styleUrls: ['./btn-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnFormComponent {
}
