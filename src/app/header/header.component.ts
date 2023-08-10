import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('callBtn') callBtn!: ElementRef;
  @ViewChild('logo') logo!: ElementRef;
  @ViewChild('reservationBtn') reservationBtn!: ElementRef;
  
  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    gsap.set([this.callBtn.nativeElement, this.logo.nativeElement,this.reservationBtn.nativeElement], {opacity: 0});
    gsap.to ([this.callBtn.nativeElement, this.logo.nativeElement, this.reservationBtn.nativeElement], {
      opacity: 1,
      duration: 2
    });
  }
}
