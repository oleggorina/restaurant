import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { bufferCount, map, mergeMap, Subscription, takeLast, tap, toArray } from 'rxjs';
import { ITeamCard } from 'src/app/interface/interface';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTeamComponent implements OnInit, OnDestroy {
  teamData: ITeamCard[] = [];
  teamDataSubscription!: Subscription;

  constructor(private teamService: TeamService,
    private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.teamDataSubscription = this.teamService.getTeam().pipe(
      toArray(),
      mergeMap(array => array)
    ).subscribe((data) => {
      this.teamData = data.slice(0, 4);
      this.changeDetector.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.teamDataSubscription) this.teamDataSubscription.unsubscribe();
  }
}
