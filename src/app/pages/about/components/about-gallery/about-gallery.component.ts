import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fadeIn } from 'src/app/services/animations.const';

@Component({
  selector: 'app-about-gallery',
  templateUrl: './about-gallery.component.html',
  styleUrls: ['./about-gallery.component.scss'],
  animations: [fadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutGalleryComponent {
  @ViewChild('galleryComponent') galleryComponent!: ElementRef;
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.galleryComponent, 200, this.animationStateSubject)
  }
}
