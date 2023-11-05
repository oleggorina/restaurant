import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fromRight } from 'src/app/services/animations.const';


@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],
  animations: [
    fromRight
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeServicesComponent {
  @ViewChild('servicesComponent') servicesComponent!: ElementRef;
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  OnScroll() {
    this.animationService.onScroll(this.servicesComponent, 700, this.animationStateSubject);
  }

}
