import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeServicesComponent implements AfterViewInit {
  
  @ViewChildren('servicesIcons') servicesIcons!: QueryList<ElementRef>
  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation(): void {
    this.servicesIcons.forEach((item: ElementRef) => {
      const element = item.nativeElement;
      this.animationService.animateFadeInFromRight(element);
    })
  }
}
