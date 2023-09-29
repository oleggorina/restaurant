import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-home-offer',
  templateUrl: './home-offer.component.html',
  styleUrls: ['./home-offer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeOfferComponent implements AfterViewInit {
  
  @ViewChild('leftCard') leftCard!: ElementRef;
  @ViewChild('rightCard') rightCard!: ElementRef;

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    this.animationService.animateFadeInFromLeft(this.leftCard.nativeElement);
    this.animationService.animateFadeInFromRight(this.rightCard.nativeElement);
  }
}
