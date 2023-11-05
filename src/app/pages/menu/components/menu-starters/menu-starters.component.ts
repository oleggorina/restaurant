import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IProduct } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { fadeIn, fromBottom, fromRight } from 'src/app/services/animations.const';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-starters',
  templateUrl: './menu-starters.component.html',
  styleUrls: ['./menu-starters.component.scss'],
  animations: [
    fadeIn,
    fromRight,
    fromBottom
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuStartersComponent implements OnInit, OnDestroy {
  @ViewChild('menuStartersComponent') menuStartersComponent!: ElementRef;
  menuStarter: IProduct[] = [];
  menuStarterSubscription!: Subscription;
  animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private productService: ProductsService,
    private changeDetectionRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.menuStarterSubscription = this.productService.getStarterMenu().subscribe(data => {
      this.menuStarter = data;
      this.changeDetectionRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.menuStarterSubscription) this.menuStarterSubscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.menuStartersComponent, 200, this.animationStateSubject);
  }
}
