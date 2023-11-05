import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  animations: [
    trigger('title', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(-30px)'})),
      transition('in => out', animate('0.3s ease-out')),
      transition('out => in', animate('0.3s ease-in'))
    ]),
    trigger('subTitle', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(-30px)'})),
      transition('in => out', animate('0.3s 0.2s ease-out')),
      transition('out => in', animate('0.3s 0.2s ease-in'))
    ]),
    trigger('btn', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(-30px)'})),
      transition('in => out', animate('0.3s 0.3s ease-out')),
      transition('out => in', animate('0.3s 0.3s ease-in'))
    ]),
    trigger('image', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(-30px)'})),
      transition('in => out', animate('0.3s 0.3s ease-out')),
      transition('out => in', animate('0.3s 0.3s ease-in'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeroComponent implements AfterViewInit, OnDestroy {
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  
  ngAfterViewInit(): void {
    this.animationStateSubject.next('in');
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.animationStateSubject.next('out');
  }
}
