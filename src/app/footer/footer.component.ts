import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('topSide') topSide!: ElementRef;
  @ViewChild('bottomSide') bottomSide!: ElementRef;
  
  ngAfterViewInit(): void {
    // this.initAnimation();
  }

  initAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.topSide.nativeElement, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: this.topSide.nativeElement,
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: true
      }
    })
    gsap.from(this.bottomSide.nativeElement, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: this.bottomSide.nativeElement,
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: true
      }
    })
  }
}
