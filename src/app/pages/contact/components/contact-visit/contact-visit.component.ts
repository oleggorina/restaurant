import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fromLeft, fromRight } from 'src/app/services/animations.const';

@Component({
  selector: 'app-contact-visit',
  templateUrl: './contact-visit.component.html',
  styleUrls: ['./contact-visit.component.scss'],
  animations: [
    fromLeft,
    fromRight
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactVisitComponent {
  @ViewChild('visitComponent') visitComponent!: ElementRef;
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.visitComponent, 400, this.animationStateSubject);
  }
}
