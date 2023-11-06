import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fadeIn } from 'src/app/services/animations.const';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements AfterViewInit, OnDestroy {
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
