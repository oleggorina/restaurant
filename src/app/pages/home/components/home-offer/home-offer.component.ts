import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home-offer',
  templateUrl: './home-offer.component.html',
  styleUrls: ['./home-offer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeOfferComponent implements AfterViewInit {
  
  @ViewChild('leftCard') leftCard!: ElementRef
  @ViewChild('rightCard') rightCard!: ElementRef

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    this.initAnimation()
  }

  initAnimation(): void {
    gsap.from(this.leftCard.nativeElement, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: this.leftCard.nativeElement,
        start: 'top 95%',
        end: 'bottom 75%',
        scrub: true
      }
    })
    gsap.from(this.rightCard.nativeElement, {
      opacity: 0,
      x: 100,
      scrollTrigger: {
        trigger: this.rightCard.nativeElement,
        start: 'top 95%',
        end: 'bottom 75%',
        scrub: true
      }
    })
  }
}
