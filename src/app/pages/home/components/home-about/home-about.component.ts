import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAboutComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('contactItems', {read: ElementRef}) contactItems!: QueryList<ElementRef>;
  @ViewChildren('years') years!: QueryList<ElementRef>;
  @ViewChild('storyImage') storyImage!: ElementRef;
  @ViewChild('sign') sign!: ElementRef;

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
    this.contactItems.forEach((item: ElementRef) => {
      const element = item.nativeElement.children;
      this.animationService.animateFadeInFromTop(element);
    })
    this.years.forEach((item: ElementRef) => {
      const element = item.nativeElement.children;
      this.animationService.animateFadeInFromRight(element)
    })
    this.animationService.animateFadeIn(this.storyImage.nativeElement);
    this.animationService.animateFadeInFromTop(this.sign.nativeElement);
  }
}
