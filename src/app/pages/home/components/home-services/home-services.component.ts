import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeServicesComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @ViewChildren('servicesIcons') servicesIcons!: QueryList<ElementRef>
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
    this.servicesIcons.forEach((item: ElementRef) => {
      const element = item.nativeElement;
      this.animationService.animateFadeInFromRight(element);
    })
  }
}
