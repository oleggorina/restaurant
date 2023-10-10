import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interface/interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-starters',
  templateUrl: './menu-starters.component.html',
  styleUrls: ['./menu-starters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuStartersComponent implements OnInit, OnDestroy {
  menuStarter: IProduct[] = [];
  menuStarterSubscription!: Subscription;

  constructor(private productService: ProductsService,
    private changeDetectionRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.menuStarterSubscription = this.productService.getStarterMenu().subscribe(data => {
      this.menuStarter = data;
      this.changeDetectionRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.menuStarterSubscription) this.menuStarterSubscription.unsubscribe();
  }
}
