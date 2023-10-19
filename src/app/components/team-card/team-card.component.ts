import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITeamCard } from 'src/app/interface/interface';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamCardComponent {
  @Input() teamImage: string = '';
  @Input() teamName: string = '';
  @Input() teamJob: string = '';
  @Input() teamId: number = 0;
}
