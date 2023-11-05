import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IProduct } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { fadeIn, fromBottom, fromLeft } from 'src/app/services/animations.const';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-main-dish',
  templateUrl: './menu-main-dish.component.html',
  styleUrls: ['./menu-main-dish.component.scss'],
  animations: [
    fadeIn,
    fromLeft,
    fromBottom
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuMainDishComponent implements OnInit, OnDestroy {
  @ViewChild('menuMainComponent') menuMainComponent!: ElementRef;
  mainDishData: IProduct[] = [];
  mainDishSubscription!: Subscription;
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  constructor(private productService: ProductsService,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.mainDishSubscription = this.productService.getMainMenu().subscribe(data => {
      this.mainDishData = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.mainDishSubscription) this.mainDishSubscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.menuMainComponent, 200, this.animationStateSubject);
  }
}
