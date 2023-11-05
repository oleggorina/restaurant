import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from '../services/animation.service';
import { fromBottom } from '../services/animations.const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [fromBottom],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @ViewChild('footerComponent') footerComponent!: ElementRef;
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.footerComponent, 500, this.animationStateSubject);
  }
  
}
