import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ITeamCard } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { fromBottom } from 'src/app/services/animations.const';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-chefs-team',
  templateUrl: './chefs-team.component.html',
  styleUrls: ['./chefs-team.component.scss'],
  animations: [fromBottom],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChefsTeamComponent implements OnInit, OnDestroy {
  @ViewChild('chefsComponent') chefsComponent!: ElementRef;
  teamData: ITeamCard[] = [];
  teamDataSubscription!: Subscription;

  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  constructor(private teamService: TeamService,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.teamDataSubscription = this.teamService.getTeam().subscribe(data => {
      this.teamData = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.teamDataSubscription) this.teamDataSubscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.chefsComponent, 200, this.animationStateSubject);
  }
}
