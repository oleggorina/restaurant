import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fadeIn, fromLeft } from 'src/app/services/animations.const';

@Component({
  selector: 'app-chefs-skill',
  templateUrl: './chefs-skill.component.html',
  styleUrls: ['./chefs-skill.component.scss'],
  animations: [
    fadeIn,
    fromLeft
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChefsSkillComponent {
  @ViewChild('skillComponent') skillComponent!: ElementRef;
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  constructor(private animationService: AnimationService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.skillComponent, 200, this.animationStateSubject);
  }
}
