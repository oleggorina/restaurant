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
    const animation = gsap.from(this.carousel.nativeElement, {
      opacity: 0,
      x: 50,
      paused: true
    })
    ScrollTrigger.create({
      trigger: this.carousel.nativeElement,
      start: 'top 90%',
      onEnter: () => animation.play(),
      onLeaveBack: () => animation.reverse()
    })
  }
  
}
