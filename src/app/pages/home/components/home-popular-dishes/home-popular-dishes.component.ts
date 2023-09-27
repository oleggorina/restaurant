import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Subscription } from 'rxjs';
import { IPopularDishes } from 'src/app/interface/interface';
import { PopularDishesService } from 'src/app/services/popular-dishes.service';

@Component({
  selector: 'app-home-popular-dishes',
  templateUrl: './home-popular-dishes.component.html',
  styleUrls: ['./home-popular-dishes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePopularDishesComponent implements OnInit, AfterViewInit, OnDestroy {

  popularDishesData: IPopularDishes[] = [];
  popularDishesSubscription!: Subscription;

  @ViewChildren('dishesItem') dishesItems!: QueryList<ElementRef>;

  timeOut: any;

  constructor(private popularDishesService: PopularDishesService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.popularDishesSubscription = this.popularDishesService.getPopularDishes().subscribe(data => {
      this.popularDishesData = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.timeOut = setTimeout(() => {
      this.initAnimation();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.popularDishesSubscription) this.popularDishesSubscription.unsubscribe();
    clearTimeout(this.timeOut)
  }
  
  initAnimation(): void {
    this.dishesItems.forEach((item: ElementRef) => {
      const element = item.nativeElement;
      gsap.from(element, {
        opacity: 0,
        y: 100,
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
