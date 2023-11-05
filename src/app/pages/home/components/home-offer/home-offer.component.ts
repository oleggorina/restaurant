import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fromLeft, fromRight } from 'src/app/services/animations.const';

@Component({
  selector: 'app-home-offer',
  templateUrl: './home-offer.component.html',
  styleUrls: ['./home-offer.component.scss'],
  animations: [
    fromRight,
    fromLeft
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeOfferComponent {
  @ViewChild('offerComponent') offerComponent!: ElementRef;
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.offerComponent, 400, this.animationStateSubject);
  }
}
