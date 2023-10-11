import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interface/interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-desserts',
  templateUrl: './menu-desserts.component.html',
  styleUrls: ['./menu-desserts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDessertsComponent implements OnInit, OnDestroy {
  dessertData: IProduct[] = [];
  dessertDataSubscription!: Subscription;
  
  constructor(private productService: ProductsService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dessertDataSubscription = this.productService.getDessertMenu().subscribe(data => {
      this.dessertData = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.dessertDataSubscription) this.dessertDataSubscription.unsubscribe();
  }
}
