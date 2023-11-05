import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IPopularDishes } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { fromBottom } from 'src/app/services/animations.const';
import { PopularDishesService } from 'src/app/services/popular-dishes.service';

@Component({
  selector: 'app-home-popular-dishes',
  templateUrl: './home-popular-dishes.component.html',
  styleUrls: ['./home-popular-dishes.component.scss'],
  animations: [
    fromBottom
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePopularDishesComponent implements OnInit, OnDestroy {

  popularDishesData: IPopularDishes[] = [];
  popularDishesSubscription!: Subscription;
  @ViewChild('popularDishesComponent') popularDishesComponent!: ElementRef;
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private popularDishesService: PopularDishesService,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.popularDishesSubscription = this.popularDishesService.getPopularDishes().subscribe(data => {
      this.popularDishesData = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.popularDishesSubscription) this.popularDishesSubscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  OnScroll() {
    this.animationService.onScroll(this.popularDishesComponent, 200, this.animationStateSubject)
  }

}
