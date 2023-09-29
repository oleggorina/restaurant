import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTestimonialsComponent implements AfterViewInit {
  
  @ViewChild('carousel') carousel!: ElementRef;

  constructor(private animationSerivce: AnimationService) {}

  ngAfterViewInit(): void {
    this.initAnimation()
  }

  initAnimation(): void {
    this.animationSerivce.animateFadeInFromRight(this.carousel.nativeElement);
  }
  
}
