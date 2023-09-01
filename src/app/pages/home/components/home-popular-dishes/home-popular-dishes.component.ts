import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPopularDishes } from 'src/app/interface/interface';
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

  constructor(private popularDishesService: PopularDishesService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.popularDishesSubscription = this.popularDishesService.getPopularDishes().subscribe(data => {
      this.popularDishesData = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.popularDishesSubscription) this.popularDishesSubscription.unsubscribe();
  }
}
