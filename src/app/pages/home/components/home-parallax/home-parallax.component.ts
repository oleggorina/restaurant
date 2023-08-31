import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-parallax',
  templateUrl: './home-parallax.component.html',
  styleUrls: ['./home-parallax.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeParallaxComponent {
  // @ViewChild('parallaxLayer') parallaxLayer!: ElementRef;
  // private readonly parallaxFactor = 0.2;

  // constructor(private el: ElementRef) {}

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event?: any): void {
  //   const yOffset = window.scrollY;
  //   const transform = `translateY(${yOffset * this.parallaxFactor}px)`;
  //   this.parallaxLayer.nativeElement.style.transform = transform;
  // }
}
