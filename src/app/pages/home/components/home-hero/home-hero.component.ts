import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { AnimationService } from 'src/app/services/animation.service';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('subTitle') subTitle!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('image') image!: ElementRef;

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
    this.animationService.animateFadeInFromBottom(this.title.nativeElement);
    this.animationService.animateFadeInFromBottom(this.subTitle.nativeElement, 0.1);
    this.animationService.animateFadeInFromBottom(this.menuBtn.nativeElement, 0.2);
    this.animationService.animateFadeInFromBottom(this.image.nativeElement, 0.3)
  }
}
