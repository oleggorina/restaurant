import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/interface/interface';
import { ProductsService } from 'src/app/services/products.service';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMenuComponent implements OnInit, AfterViewInit, OnDestroy{
  menuStarter: IProduct[] = [];
  menuMainDish: IProduct[] = [];
  menuDessert: IProduct[] = [];
  menuDataSubscription!: Subscription;

  @ViewChild('contentTitle') contentTitle!: ElementRef;
  @ViewChild('contentImage') contentImage!: ElementRef;
  @ViewChildren('menuItem', {read: ElementRef}) menuItems!: QueryList<ElementRef>;
  
  constructor(private productsService: ProductsService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getMenuData('starters', this.menuStarter);
    this.getMenuData('mainDish', this.menuMainDish);
    this.getMenuData('dessert', this.menuDessert);
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    // setTimeout(() => {
    //   console.log('AfterViewInit executed')
    //   this.initAnimation();
    // }, 100)
  }

  ngOnDestroy(): void {
    if (this.menuDataSubscription) this.menuDataSubscription.unsubscribe();
  }

  initAnimation(): void {
    gsap.from(this.contentImage.nativeElement, {
      opacity: 0,
      scrollTrigger: {
        trigger: this.contentImage.nativeElement,
        start: 'top 100%',
        end: 'top 10%',
        scrub: true
      }
    });
    gsap.from(this.contentTitle.nativeElement, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: this.contentTitle.nativeElement,
        start: 'top 90%',
        end: 'bottom 90%',
        scrub: true
      }
    });
    this.menuItems.forEach((item: ElementRef, index: number) => {
      const element: HTMLElement = item.nativeElement;
      gsap.from(element, {
        opacity: 0,
        x: 50,
        stagger: {
          amount: 12,
          from: index * 0.5
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: true
        }
      })
    })
  }

  private getMenuData(type: string, menuArray: IProduct[]): void {
    this.menuDataSubscription = this.productsService.getProducts(type).subscribe((data) => {
      menuArray.push(...data);
      this.changeDetectorRef.detectChanges();
    })
  }
}
