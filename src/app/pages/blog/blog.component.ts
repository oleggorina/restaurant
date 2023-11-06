import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fadeIn } from 'src/app/services/animations.const';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [fadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements AfterViewInit, OnDestroy {
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  ngAfterViewInit(): void {
    this.animationStateSubject.next('in');
  }

  ngOnDestroy(): void {
    this.animationStateSubject.next('out');
  }
}
