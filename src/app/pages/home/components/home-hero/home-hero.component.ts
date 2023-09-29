import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeroComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('subTitle') subTitle!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('image') image!: ElementRef;

  constructor(private animationService: AnimationService) {}
  
  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    this.animationService.animateFadeInFromBottom(this.title.nativeElement);
    this.animationService.animateFadeInFromBottom(this.subTitle.nativeElement, 0.1);
    this.animationService.animateFadeInFromBottom(this.menuBtn.nativeElement, 0.2);
    this.animationService.animateFadeInFromBottom(this.image.nativeElement, 0.3)
  }
}
