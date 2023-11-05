import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fadeIn } from 'src/app/services/animations.const';

@Component({
  selector: 'app-gallery-feature',
  templateUrl: './gallery-feature.component.html',
  styleUrls: ['./gallery-feature.component.scss'],
  animations: [fadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryFeatureComponent {
  @ViewChild('featureComponent') featureComponent!: ElementRef;
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.featureComponent, 200, this.animationStateSubject);
  }
}
