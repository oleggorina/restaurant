import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  width: number = window.innerWidth;

  ngOnInit(): void {
    const mockEvent: any = {
      type: 'resize',
      target: window
    }
    this.onResize(mockEvent);
  }

  @HostListener('window:resize')
  onResize(event: Event) {
    this.width = window.innerWidth;
  }
}
