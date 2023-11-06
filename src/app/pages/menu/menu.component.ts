import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fadeIn } from 'src/app/services/animations.const';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [fadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements AfterViewInit, OnDestroy {
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  
  ngAfterViewInit(): void {
    this.animationStateSubject.next('in');
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.animationStateSubject.next('out');
  }
}
