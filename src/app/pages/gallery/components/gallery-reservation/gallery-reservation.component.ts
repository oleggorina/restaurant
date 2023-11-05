import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fromLeft } from 'src/app/services/animations.const';

@Component({
  selector: 'app-gallery-reservation',
  templateUrl: './gallery-reservation.component.html',
  styleUrls: ['./gallery-reservation.component.scss'],
  animations: [fromLeft],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryReservationComponent {
  @ViewChild('reservationComponent') reservationComponent!: ElementRef;
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.reservationComponent, 500, this.animationStateSubject);
  }
}
