import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

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
  
  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    gsap.from(this.title.nativeElement, {
      opacity: 0,
      y: -20,
      duration: 1
    });
    gsap.from(this.subTitle.nativeElement, {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 0.3
    });
    gsap.from([this.menuBtn.nativeElement, this.image.nativeElement], {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 0.6
    });
  }
}
