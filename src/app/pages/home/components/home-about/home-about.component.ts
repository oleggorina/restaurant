import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAboutComponent implements AfterViewInit {
  @ViewChildren('contactItems', {read: ElementRef}) contactItems!: QueryList<ElementRef>;
  @ViewChildren('years') years!: QueryList<ElementRef>;
  @ViewChild('storyImage') storyImage!: ElementRef;
  @ViewChild('sign') sign!: ElementRef;
  
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.initAnimation();
  }

  initAnimation(): void {
    this.contactItems.forEach((item: ElementRef) => {
      const element = item.nativeElement.children;
      const animation = gsap.from(element, {
        opacity: 0,
        y: 50,
        stagger: {
          amount: 1
        },
        paused: true
      })
      ScrollTrigger.create({
        trigger: element,
        start: 'top 90%',
        onEnter: () => {
          animation.play()
        },
        onLeaveBack: () => {
          animation.reverse()
        }
      })
    })
    this.years.forEach((item: ElementRef) => {
      const element = item.nativeElement.children;
      gsap.from(element, {
        opacity: 0,
        x: 50,
        stagger: {
          amount: 2
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: true
        }
      })
    })
    gsap.from(this.storyImage.nativeElement, {
      opacity: 0,
      scrollTrigger: {
        trigger: this.storyImage.nativeElement,
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: true
      }
    })
    gsap.from(this.sign.nativeElement, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: this.sign.nativeElement,
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: true
      }
    })
  }
}
