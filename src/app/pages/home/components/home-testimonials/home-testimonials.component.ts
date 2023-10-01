import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTestimonialsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('testimonial') testimonial!: ElementRef;

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    // this.initAnimation();
  }

  ngOnDestroy(): void {
    this.animationService.cleanUpAnimations();
  }

  initAnimation(): void {
    this.animationService.animateFadeInFromRight(this.testimonial.nativeElement)
  }
}
