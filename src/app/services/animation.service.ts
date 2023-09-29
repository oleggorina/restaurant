import { Injectable } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() {
    gsap.registerPlugin(ScrollTrigger)
   }

  animateFadeIn(element: HTMLElement): void {
    gsap.from(element, {
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: true
      }
    })
  }

  animateFadeInFromRight(element: HTMLElement, stagger: number = 0): void {
    gsap.from(element, {
      opacity: 0,
      x: 20,
      stagger: {
        amount: stagger
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: true
      }
    })
  }
  animateFadeInFromLeft(element: HTMLElement, stagger: number = 0): void {
    gsap.from(element, {
      opacity: 0,
      x: -20,
      stagger: {
        amount: stagger
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: true
      }
    })
  }

  animateFadeInFromTop(element: HTMLElement, stagger: number = 0): void {
    const animation = gsap.from(element, {
      opacity: 0,
      y: 50,
      stagger: {
        amount: stagger
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        onEnter: () => {animation.play()},
        onLeaveBack: () => {animation.reverse()}
      }
    })
  }
  animateFadeInFromBottom(element: HTMLElement, delay: number = 0, stagger: number = 0): void {
    const animation = gsap.from(element, {
      opacity: 0,
      y: -50,
      delay: delay,
      stagger: {
        amount: stagger
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        onEnter: () => {animation.play()},
        onLeaveBack: () => {animation.reverse()}
      }
    })
  }
}
