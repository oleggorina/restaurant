import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTestimonialsComponent implements AfterViewInit {
  
  @ViewChild('carousel') carousel!: ElementRef;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    this.initAnimation()
  }

  initAnimation(): void {
    gsap.from(this.carousel.nativeElement, {
      opacity: 0,
      x: 50,
      scrollTrigger: {
        trigger: this.carousel.nativeElement,
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: true
      }
    })
  }
  
}
