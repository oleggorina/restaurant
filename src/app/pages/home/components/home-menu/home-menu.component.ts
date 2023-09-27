import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  @ViewChildren('menuItems') menuItems!: QueryList<ElementRef>;

  scrollArrivedAtTop: boolean = false;
  // timeOut!: any;

  constructor(private productsService: ProductsService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getMenuData();
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.initAnimation();
    // this.timeOut = setTimeout(() => {
    //   this.initAnimation();
    //   console.log('Animation is active')
    // }, 100)
  }

  ngOnDestroy(): void {
    if (this.menuDataSubscription) this.menuDataSubscription.unsubscribe();
    // clearTimeout(this.timeOut);
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
    })
    // this.menuItems.forEach((item: ElementRef) => {
    //   const element = item.nativeElement;
    //   gsap.from(element, {
    //     opacity: 0,
    //     x: 50,
    //     scrollTrigger: {
    //       trigger: element,
    //       start: 'top 90%',
    //       end: 'bottom 70%',
    //       scrub: true
    //     }
    //   });
    // })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (!this.scrollArrivedAtTop) {
      this.menuItems.forEach((item: ElementRef) => {
        const element = item.nativeElement;
        const scrollPosition = window.scrollY - element.getBoundingClientRect().top;
        const gap = 100;
        if (scrollPosition <= gap) {
          this.scrollArrivedAtTop = true;
          gsap.from(element, {
            opacity: 0,
            x: 50,
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              end: 'bottom 70%',
              scrub: true
            }
          });
          window.removeEventListener('scroll', this.onScroll);
        }
      })
    }
  }

  private getMenuData(): void {
    this.menuDataSubscription = this.productsService.getHomeMenu().subscribe(([starters, mainDish, dessert]) => {
      this.menuStarter = starters;
      this.menuMainDish = mainDish;
      this.menuDessert = dessert;
      this.changeDetectorRef.detectChanges();
    })
  }
}
