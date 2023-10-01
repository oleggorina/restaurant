import { ElementRef, Injectable } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  private fadeIn!: gsap.core.Tween;
  private fadeInFromTop!: gsap.core.Tween;
  private fadeInFromRight!: gsap.core.Tween;
  private fadeInFromLeft!: gsap.core.Tween;
  private fadeInFromBottom!: gsap.core.Tween;

  constructor() {
    gsap.registerPlugin(ScrollTrigger)
   }

  animateFadeIn(element: HTMLElement): void {
    this.fadeIn = gsap.from(element, {
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        onEnter: () => {this.fadeIn.play()},
        onLeaveBack: () => {this.fadeIn.reverse()}
      }
    })
  }

  animateFadeInFromRight(element: HTMLElement): void {
    this.fadeInFromRight = gsap.from(element, {
      opacity: 0,
      x: 20,
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: true
      }
    })
  }
  animateFadeInFromLeft(element: HTMLElement): void {
    this.fadeInFromLeft = gsap.from(element, {
      opacity: 0,
      x: -20,
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: true
      }
    })
  }

  animateFadeInFromTop(element: HTMLElement): void {
    this.fadeInFromTop = gsap.from(element, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        onEnter: () => {this.fadeInFromTop.play()},
        onLeaveBack: () => {this.fadeInFromTop.reverse()}
      }
    })
  }
  animateFadeInFromBottom(element: HTMLElement, delay: number = 0): void {
    this.fadeInFromBottom = gsap.from(element, {
      opacity: 0,
      y: -50,
      delay: delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        onEnter: () => {this.fadeInFromBottom.play()},
        onLeaveBack: () => {this.fadeInFromBottom.reverse()}
      }
    })
  }

  cleanUpAnimations(): void {
    if (this.fadeIn) this.fadeIn.kill();
    if (this.fadeInFromTop) this.fadeInFromTop.kill();
    if (this.fadeInFromRight) this.fadeInFromRight.kill();
    if (this.fadeInFromBottom) this.fadeInFromBottom.kill();
    if (this.fadeInFromLeft) this.fadeInFromLeft.kill();
  }
}
