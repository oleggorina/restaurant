import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss'],
  animations: [
    trigger('contactItem1', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      state('out', style({ opacity: 0, transform: 'translateY(50px)' })),
      transition('in => out', animate(`0.3s ease-out`)),
      transition('out => in', animate(`0.3s ease-in`))
    ]),
    trigger('contactItem2', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      state('out', style({ opacity: 0, transform: 'translateY(50px)' })),
      transition('in => out', animate(`0.3s 0.2s ease-out`)),
      transition('out => in', animate(`0.3s 0.2s ease-in`))
    ]),
    trigger('contactItem3', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      state('out', style({ opacity: 0, transform: 'translateY(50px)' })),
      transition('in => out', animate(`0.3s 0.3s ease-out`)),
      transition('out => in', animate(`0.3s 0.3s ease-in`))
    ]),
    trigger('image', [
      state('in', style({ opacity: 1})),
      state('out', style({ opacity: 0})),
      transition('in => out', animate(`0.4s ease-out`)),
      transition('out => in', animate(`0.4s ease-in`))
    ]),
    trigger('year1', [
      state('in', style({ opacity: 1, transform: 'translateX(0)'})),
      state('out', style({ opacity: 0, transform: 'translateX(20px)'})),
      transition('in => out', animate(`0.3s ease-out`)),
      transition('out => in', animate(`0.3s ease-in`))
    ]),
    trigger('year2', [
      state('in', style({ opacity: 1, transform: 'translateX(0)'})),
      state('out', style({ opacity: 0, transform: 'translateX(20px)'})),
      transition('in => out', animate(`0.3s 0.2s ease-out`)),
      transition('out => in', animate(`0.3s 0.2s ease-in`))
    ]),
    trigger('sign', [
      state('in', style({ opacity: 1, transform: 'translateY(0)'})),
      state('out', style({ opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate(`0.3s ease-out`)),
      transition('out => in', animate(`0.3s ease-in`))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAboutComponent {
  @ViewChild('aboutComponent') aboutComponent!: ElementRef;
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.aboutComponent, 300, this.animationStateSubject);
  }

}
