import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialsComponent implements AfterViewInit {
  @ViewChild('socials') socials!: ElementRef;

  @Input() textColor: string = 'white';
  
  ngAfterViewInit(): void {
    // this.initAnimation();
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
