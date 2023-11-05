import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  onScroll(element: ElementRef, offset: number = 0, subject: BehaviorSubject<string>): void {
    const componentPosition = element.nativeElement.offsetTop;
    const scrollPosition = window.scrollY +  offset;

    if (scrollPosition >= componentPosition) {
      subject.next('in');
    } else {
      subject.next('out');
    }
  }
}
