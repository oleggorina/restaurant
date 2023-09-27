import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialsComponent implements AfterViewInit {
  @ViewChild('socials') socials!: ElementRef;
  
  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    gsap.from(this.socials.nativeElement.children, {
      opacity: 0,
      y: 20,
      stagger: {
        amount: 1
      }
    })
  }
}
