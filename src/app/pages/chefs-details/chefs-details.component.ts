import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fadeIn } from 'src/app/services/animations.const';

@Component({
  selector: 'app-chefs-details',
  templateUrl: './chefs-details.component.html',
  styleUrls: ['./chefs-details.component.scss'],
  animations: [fadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChefsDetailsComponent implements AfterViewInit, OnDestroy {
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
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
