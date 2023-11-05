import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fadeIn, fromRight } from 'src/app/services/animations.const';

@Component({
  selector: 'app-booking-choise',
  templateUrl: './booking-choise.component.html',
  styleUrls: ['./booking-choise.component.scss'],
  animations: [
    fadeIn,
    fromRight,
    trigger('item1', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate(`0.3s 0.4s ease-out`)),
      transition('out => in', animate(`0.3s ease-in`))
    ]),
    trigger('item2', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate(`0.3s 0.3s ease-out`)),
      transition('out => in', animate(`0.3s 0.2s ease-in`))
    ]),
    trigger('item3', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate(`0.3s 0.2s ease-out`)),
      transition('out => in', animate(`0.3s 0.3s ease-in`))
    ]),
    trigger('item4', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate(`0.3s ease-out`)),
      transition('out => in', animate(`0.3s 0.4s ease-in`))
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingChoiseComponent {
  @ViewChild('choiseComponent') choiseComponent!: ElementRef;
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.choiseComponent, 200, this.animationStateSubject);
  }
}
