import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ITeamCard } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { fadeIn, fromBottom, fromRight } from 'src/app/services/animations.const';

@Component({
  selector: 'app-chef-detail',
  templateUrl: './chef-detail.component.html',
  styleUrls: ['./chef-detail.component.scss'],
  animations: [
    fadeIn,
    fromRight,
    fromBottom,
    trigger('contact1', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate(`0.4s 0.4s ease-out`)),
      transition('out => in', animate(`0.3s ease-in`))
    ]),
    trigger('contact3', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate(`0.3s 0.2s ease-out`)),
      transition('out => in', animate(`0.3s 0.2s ease-in`))
    ]),
    trigger('contact2', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate(`0.3s 0.3s ease-out`)),
      transition('out => in', animate(`0.3s 0.3s ease-in`))
    ]),
    trigger('contact4', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate(`0.3s ease-out`)),
      transition('out => in', animate(`0.3s 0.4s ease-in`))
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChefDetailComponent implements OnInit, OnDestroy {
  @ViewChild('chefDetailComponent') chefDetailComponent!: ElementRef;
  chefData!: ITeamCard;
  chefDataSubscription!: Subscription;

  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  constructor(private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.chefDataSubscription = this.activatedRoute.data.subscribe(data => {
      this.chefData = data['data'];
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.chefDataSubscription) this.chefDataSubscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.chefDetailComponent, 200, this.animationStateSubject);
  }
}
