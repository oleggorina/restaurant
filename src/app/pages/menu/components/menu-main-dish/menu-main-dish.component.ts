import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interface/interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-main-dish',
  templateUrl: './menu-main-dish.component.html',
  styleUrls: ['./menu-main-dish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuMainDishComponent implements OnInit, OnDestroy {
  mainDishData: IProduct[] = [];
  mainDishSubscription!: Subscription;
  
  constructor(private productService: ProductsService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.mainDishSubscription = this.productService.getMainMenu().subscribe(data => {
      this.mainDishData = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.mainDishSubscription) this.mainDishSubscription.unsubscribe();
  }
}
