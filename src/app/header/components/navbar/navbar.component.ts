import { AfterViewInit, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fadeIn } from 'src/app/services/animations.const';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    fadeIn
  ]
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  width: number = window.innerWidth;
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  ngOnInit(): void {
    this.onResize();
  }

  ngAfterViewInit(): void {
    this.animationStateSubject.next('in');
  }

  ngOnDestroy(): void {
    this.animationStateSubject.next('out');
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }
}
