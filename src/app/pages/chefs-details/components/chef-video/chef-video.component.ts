import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fromBottom } from 'src/app/services/animations.const';

@Component({
  selector: 'app-chef-video',
  templateUrl: './chef-video.component.html',
  styleUrls: ['./chef-video.component.scss'],
  animations: [fromBottom],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChefVideoComponent {
  @ViewChild('videoComponent') videoComponent!: ElementRef;
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  isModalOpen: boolean = false;

  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.videoComponent, 200, this.animationStateSubject);
  }
}
