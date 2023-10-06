import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ITestimonialCard } from 'src/app/interface/interface';
import { Subscription } from 'rxjs';
import { TestimonialsService } from 'src/app/services/testimonials.service';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTestimonialsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('testimonialCarousel') testimonialCarousel!: ElementRef;
  @ViewChild('testimonialItem') testimonialItem!: ElementRef;
  @ViewChild('container') container!: ElementRef;

  totalSlides: number = 0;
  cardsPerSlide: number = 0;
  slideIndicators: number[] = [];
  currentIndex: number = 0;
  cardWidth: number = 0;
  cardGap: number = 0;
  
  testimonialData: ITestimonialCard[] = [];
  testimonialSubscription!: Subscription;

  cardWidthValue: string =  '';
  calculatedWidth: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private testimonialsService: TestimonialsService,
    private renderer: Renderer2,
    private carouselService: CarouselService) {
      this.goNext = this.goNext.bind(this);
      this.goPrev = this.goPrev.bind(this);
    }

  ngOnInit(): void {
    this.testimonialSubscription = this.testimonialsService.getTestimonials().subscribe((data) => {
      this.testimonialData = data;
      this.onResize();
      this.changeDetectorRef.detectChanges();
    });
  }

  ngAfterViewInit(): void {
    this.carouselService.initCarousel(
      this.testimonialCarousel.nativeElement,
      this.goNext, this.goPrev);
  }

  ngOnDestroy(): void {
    if (this.testimonialSubscription) this.testimonialSubscription.unsubscribe();
  }

  goNext(): void {
    this.carouselService.goNext(
      this.testimonialCarousel.nativeElement,
      this.testimonialItem.nativeElement,
      this.cardsPerSlide,
      this.currentIndex,
      this.totalSlides,
      this.renderer);
    if (this.currentIndex < (this.slideIndicators.length - 1)) this.currentIndex++;
    
    console.log(this.currentIndex)
  }

  goPrev(): void {
    this.carouselService.goPrev(
      this.testimonialCarousel.nativeElement,
      this.testimonialItem.nativeElement,
      this.cardsPerSlide,
      this.currentIndex,
      this.totalSlides,
      this.renderer);
    if (this.currentIndex > 0) this.currentIndex--;
    console.log(this.currentIndex)
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.carouselService.goToSlide(this.testimonialCarousel.nativeElement, this.testimonialItem.nativeElement, this.cardsPerSlide, slideIndex, this.renderer);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    this.getWidthCard();
    this.setWidthValue();
    this.cardsPerSlide = this.getCardsPerSlide();
    
    this.totalSlides = Math.ceil(this.testimonialData.length / this.cardsPerSlide);
    this.slideIndicators = Array.from({ length: this.totalSlides }, (_, i) => i);
    this.currentIndex = Math.min(this.currentIndex, this.totalSlides - 1);
  }

  getCardsPerSlide(): number {
    if (window.innerWidth < 1300 && window.innerWidth > 992) {
      return 2;
    } else if (window.innerWidth < 992) {
      return 1
    } else {
      return 3;
    }
  }

  getWidthCard(): string | any {
    if (window.innerWidth < 992) {
      return `${this.container.nativeElement.offsetWidth}px`
    }
  }

  private setWidthValue(): void {
    this.cardWidthValue = this.getWidthCard();
  }
}
