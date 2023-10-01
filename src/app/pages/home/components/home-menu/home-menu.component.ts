import { AfterContentChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { IProduct } from 'src/app/interface/interface';
import { ProductsService } from 'src/app/services/products.service';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMenuComponent implements OnInit, OnDestroy {
  menuStarter: IProduct[] = [];
  menuMainDish: IProduct[] = [];
  menuDessert: IProduct[] = [];
  menuDataSubscription!: Subscription;

  @ViewChild('contentTitle') contentTitle!: ElementRef;
  @ViewChild('contentImage') contentImage!: ElementRef;
  @ViewChildren('menuItems') menuItems!: QueryList<ElementRef>;

  constructor(private productsService: ProductsService,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) { }

  ngOnInit(): void {
    this.menuDataSubscription = forkJoin([
      this.productsService.getStarterMenu(),
      this.productsService.getMainMenu(),
      this.productsService.getDessertMenu()
    ]).subscribe(([starters, mainDish, dessert]) => {
      this.menuStarter = starters;
      this.menuMainDish = mainDish;
      this.menuDessert = dessert;
      this.changeDetectorRef.detectChanges();
      // this.initAnimation();
    })
  }

  ngOnDestroy(): void {
    if (this.menuDataSubscription) this.menuDataSubscription.unsubscribe();
    this.animationService.cleanUpAnimations();
  }

  initAnimation(): void {
    this.animationService.animateFadeIn(this.contentImage.nativeElement);
    this.animationService.animateFadeIn(this.contentTitle.nativeElement);
    this.menuItems.forEach((item) => {
      const element = item.nativeElement;
      this.animationService.animateFadeInFromRight(element);
    })
  }
}
