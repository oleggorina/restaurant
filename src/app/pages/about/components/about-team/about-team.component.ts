import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, bufferCount, map, mergeMap, Observable, Subscription, takeLast, tap, toArray } from 'rxjs';
import { ITeamCard } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { fromBottom } from 'src/app/services/animations.const';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss'],
  animations: [fromBottom],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTeamComponent implements OnInit, OnDestroy {
  @ViewChild('teamComponent') teamComponent!: ElementRef;
  teamData: ITeamCard[] = [];
  teamDataSubscription!: Subscription;
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private teamService: TeamService,
    private changeDetector: ChangeDetectorRef,
    private animationService: AnimationService) {}

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

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.teamComponent, 200, this.animationStateSubject)
  }
}
