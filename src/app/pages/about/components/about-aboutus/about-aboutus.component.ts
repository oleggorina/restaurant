import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-aboutus',
  templateUrl: './about-aboutus.component.html',
  styleUrls: ['./about-aboutus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutAboutusComponent implements AfterViewInit {
  @ViewChild('content') content!: ElementRef;
  @ViewChild('image') image!: ElementRef;
  @ViewChild('card') card!: ElementRef;
  
  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.content.nativeElement, {
      opacity: 0,
      x: -70,
      scrollTrigger: {
        trigger: this.content.nativeElement,
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: true
      }
    });
    gsap.from(this.image.nativeElement, {
      opacity: 0,
      x: 70,
      scrollTrigger: {
        trigger: this.image.nativeElement,
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: true
      }
    })
    gsap.from(this.card.nativeElement, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: this.card.nativeElement,
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: true
      }
    })
  }
}
