import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, Subscription } from 'rxjs';
import { IProduct } from 'src/app/interface/interface';
import { ProductsService } from 'src/app/services/products.service';
import { AnimationService } from 'src/app/services/animation.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
  animations: [
    trigger('menuItem', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      state('out', style({opacity: 0, transform: 'translateX(20px)'})),
      transition('in => out', animate('0.3s ease-out')),
      transition('out => in', animate('0.3s ease-in'))
    ]),
    trigger('title', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate('0.3s ease-out')),
      transition('out => in', animate('0.3s ease-in'))
    ]),
    trigger('image', [
      state('in', style({opacity: 1})),
      state('out', style({opacity: 0})),
      transition('in => out', animate('0.5s ease-out')),
      transition('out => in', animate('0.5s ease-in'))
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMenuComponent implements OnInit, OnDestroy {
  @ViewChild('menuComponent') menuComponent!: ElementRef;
  menuStarter: IProduct[] = [];
  menuMainDish: IProduct[] = [];
  menuDessert: IProduct[] = [];
  menuDataSubscription!: Subscription;

  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

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
    })
  }

  ngOnDestroy(): void {
    if (this.menuDataSubscription) this.menuDataSubscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.menuComponent, 400, this.animationStateSubject);
  }
}
