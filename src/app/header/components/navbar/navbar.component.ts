import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  width: number = window.innerWidth;
  @ViewChild('links') links!: ElementRef;
  @ViewChild('socials') socials!: ElementRef;

  ngOnInit(): void {
    const mockEvent: any = {
      type: 'resize',
      target: window
    }
    this.onResize(mockEvent);
  }

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  @HostListener('window:resize')
  onResize(event: Event) {
    this.width = window.innerWidth;
  }

  initAnimation(): void {
    gsap.set([this.links.nativeElement, this.socials.nativeElement], {opacity: 0});
    gsap.to ([this.links.nativeElement, this.socials.nativeElement], {
      opacity: 1,
      duration: 1
    });
  }
}
