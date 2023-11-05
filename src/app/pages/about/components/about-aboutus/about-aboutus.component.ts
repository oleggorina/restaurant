import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fromBottom, fromLeft, fromRight } from 'src/app/services/animations.const';

@Component({
  selector: 'app-about-aboutus',
  templateUrl: './about-aboutus.component.html',
  styleUrls: ['./about-aboutus.component.scss'],
  animations: [
    fromLeft,
    fromRight,
    fromBottom
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutAboutusComponent {
  @ViewChild('aboutUsComponent') aboutUsComponent!: ElementRef;
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.aboutUsComponent, 200, this.animationStateSubject)
  }
}
