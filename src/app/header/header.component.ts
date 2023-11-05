import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fadeIn } from '../services/animations.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    fadeIn
  ]
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  ngAfterViewInit(): void {
    this.animationStateSubject.next('in');
  }

  ngOnDestroy(): void {
    this.animationStateSubject.next('out');
  }
}
