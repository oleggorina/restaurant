import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Subscription } from 'rxjs';
import { IPopularDishes } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { PopularDishesService } from 'src/app/services/popular-dishes.service';

@Component({
  selector: 'app-home-popular-dishes',
  templateUrl: './home-popular-dishes.component.html',
  styleUrls: ['./home-popular-dishes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePopularDishesComponent implements OnInit, OnDestroy {

  popularDishesData: IPopularDishes[] = [];
  popularDishesSubscription!: Subscription;

  @ViewChildren('dishesItem') dishesItems!: QueryList<ElementRef>;

  constructor(private popularDishesService: PopularDishesService,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.popularDishesSubscription = this.popularDishesService.getPopularDishes().subscribe(data => {
      this.popularDishesData = data;
      this.changeDetectorRef.detectChanges();
      // this.initAnimation();
    })
  }

  ngOnDestroy(): void {
    if (this.popularDishesSubscription) this.popularDishesSubscription.unsubscribe();
    this.animationService.cleanUpAnimations();
  }
  
  initAnimation(): void {
    this.dishesItems.forEach((item: ElementRef) => {
      const element = item.nativeElement;
      this.animationService.animateFadeInFromBottom(element);
    })
  }

}
