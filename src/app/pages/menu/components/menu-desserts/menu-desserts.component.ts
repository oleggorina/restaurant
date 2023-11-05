import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IProduct } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { fadeIn, fromBottom, fromRight } from 'src/app/services/animations.const';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-desserts',
  templateUrl: './menu-desserts.component.html',
  styleUrls: ['./menu-desserts.component.scss'],
  animations: [
    fadeIn,
    fromRight,
    fromBottom
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDessertsComponent implements OnInit, OnDestroy {
  @ViewChild('menuDessertsComponent') menuDessertsComponent!: ElementRef;
  dessertData: IProduct[] = [];
  dessertDataSubscription!: Subscription;
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  constructor(private productService: ProductsService,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.dessertDataSubscription = this.productService.getDessertMenu().subscribe(data => {
      this.dessertData = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.dessertDataSubscription) this.dessertDataSubscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.menuDessertsComponent, 200, this.animationStateSubject);
  }
}
