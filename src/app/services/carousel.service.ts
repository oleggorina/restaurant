import { Injectable, Renderer2 } from '@angular/core';
import { fromEvent, map, merge, Observable, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  initCarousel(carousel: HTMLElement, goNext: () => void, goPrev: () => void): void {
    this.swipe(zip(
      this.getX(
        fromEvent<TouchEvent>(carousel, 'touchstart'),
        fromEvent<MouseEvent>(carousel, 'mousedown')
      ),
      this.getX(
        fromEvent<TouchEvent>(carousel, 'touchend'),
        fromEvent<MouseEvent>(carousel, 'mouseup')
      )
    )).subscribe(direction => {
      if (direction < 100 && direction != 0) {
        console.log(direction)
        goNext();
        
      } else if (direction > 100 && direction != 0) {
        console.log(direction)
        console.log('swipe right')
        goPrev();
      }
    })
  }
  
  goNext(carousel: HTMLElement, carouselItem: HTMLElement, cardsPerSlide: number, currentIndex: number, totalSlides: number, renderer: Renderer2): void {
    const nextIndex = currentIndex + 1;
    if (nextIndex < totalSlides) {
      this.goToSlide(carousel, carouselItem, cardsPerSlide, nextIndex, renderer);
    }
  }

  goPrev(carousel: HTMLElement, carouselItem: HTMLElement, cardsPerSlide: number, currentIndex: number, totalSlides: number, renderer: Renderer2): void {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      this.goToSlide(carousel, carouselItem, cardsPerSlide, prevIndex, renderer);
    }
  }

  goToSlide(carousel: HTMLElement, carouselItem: HTMLElement, cardsPerSlide: number, slideIndex: number, renderer: Renderer2): void {
    const gapValue = window.getComputedStyle(carousel).getPropertyValue('gap');
    const widthValue = window.getComputedStyle(carouselItem).getPropertyValue('width');
    const cardGap = parseInt(gapValue);
    const cardWidth = parseInt(widthValue);
    const translateX = -(slideIndex * (cardWidth + cardGap) * cardsPerSlide);
    renderer.setStyle(carousel, 'transform', `translateX(${translateX}px)`);
  }

  private getX(source1$: Observable<TouchEvent>, source2$: Observable<MouseEvent>): Observable<number> {
    return merge(source1$, source2$).pipe(
      map((event: MouseEvent | TouchEvent): number => {
        if (event instanceof TouchEvent) return event.changedTouches[0].clientX;
        else return event.clientX
      })
    )
  }

  private swipe(source$: Observable<[number, number]>): Observable<number> {
    return source$.pipe(
      map(([x,y]) => y - x)
    )
  }
  
}
