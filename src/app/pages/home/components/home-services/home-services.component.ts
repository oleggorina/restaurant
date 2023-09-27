import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeServicesComponent implements AfterViewInit {
  
  @ViewChildren('servicesIcons') servicesIcons!: QueryList<ElementRef>
  
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.initAnimation();
  }

  initAnimation(): void {
    this.servicesIcons.forEach((item: ElementRef) => {
      const element = item.nativeElement;
      gsap.from(element, {
        opacity: 0,
        x: 50,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: true
        }
      })
    })
  }
}
