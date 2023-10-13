import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITeamCard } from 'src/app/interface/interface';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-chefs-team',
  templateUrl: './chefs-team.component.html',
  styleUrls: ['./chefs-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChefsTeamComponent implements OnInit, OnDestroy {
  teamData: ITeamCard[] = [];
  teamDataSubscription!: Subscription;
  
  constructor(private teamService: TeamService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.teamDataSubscription = this.teamService.getTeam().subscribe(data => {
      this.teamData = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.teamDataSubscription) this.teamDataSubscription.unsubscribe();
  }
}
