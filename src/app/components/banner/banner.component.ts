import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('banner') banner!: ElementRef;
  
  ngAfterViewInit(): void {
    this.initAnimation()
  }

  initAnimation(): void {
    gsap.from(this.banner.nativeElement, {
      opacity: 0,
      duration: 0.5
    })
  }
}
