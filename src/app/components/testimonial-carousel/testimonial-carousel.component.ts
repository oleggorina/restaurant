import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITestimonialCard } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { CarouselService } from 'src/app/services/carousel.service';
import { TestimonialsService } from 'src/app/services/testimonials.service';

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialCarouselComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('carouselItems') carouselItems!: ElementRef;
  @ViewChild('cardItem') cardItem!: ElementRef;

  testimonialData: ITestimonialCard[] = [];
  testimonialSubscription!: Subscription;

  totalSlides: number = 0;
  cardsPerSlide: number = 0;
  slideIndicators: number[] = [];
  currentIndex: number = 0;
  cardWidth: number = 0;
  cardGap: number = 0;

  cardWidthValue: string = '';
  carouselHeightValue: string = '';

  constructor(private testimonialsService: TestimonialsService,
    private changeDetectorRef: ChangeDetectorRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.testimonialSubscription = this.testimonialsService.getTestimonials().subscribe((data) => {
      this.testimonialData = data;
      this.onResize();
      this.changeDetectorRef.detectChanges();
    });
  }

  ngAfterViewInit(): void {
    this.setWidthValue();
    window.addEventListener('resize', this.setWidthValue.bind(this));
  }

  ngOnDestroy(): void {
    if (this.testimonialSubscription) this.testimonialSubscription.unsubscribe();
  }

  goToSlide(slideIndex: number): void {
    const gapElement = this.carouselItems.nativeElement as HTMLElement;
    const cardItemElement = this.cardItem.nativeElement as HTMLElement;
    const gapValue = window.getComputedStyle(gapElement).getPropertyValue('gap');
    const widthValue = window.getComputedStyle(cardItemElement).getPropertyValue('width');
    this.cardGap = parseInt(gapValue);
    this.cardWidth = parseInt(widthValue);
    const cardsPerSlide = this.cardsPerSlide;
    this.cardsPerSlide = this.getCardsPerSlide();
    const translateX = -(slideIndex * (this.cardWidth + this.cardGap) * this.cardsPerSlide);
    this.renderer.setStyle(this.carousel.nativeElement, 'transform', `translateX(${translateX}px)`);
    this.currentIndex = slideIndex;

    if (cardsPerSlide !== this.cardsPerSlide) {
      this.totalSlides = Math.ceil(this.testimonialData.length / this.cardsPerSlide);
      this.slideIndicators = Array.from({ length: this.totalSlides }, (_, i) => i);
    }
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

  getWidthCard(): string {
    if (window.innerWidth < 1300 && window.innerWidth > 992) {
      return '460px'
    } else if (window.innerWidth < 992) {
      return `${this.carousel.nativeElement.offsetWidth}px`
    } else {
      return '400px'
    }
  }

  private setWidthValue(): void {
    this.cardWidthValue = this.getWidthCard();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    this.cardsPerSlide = this.getCardsPerSlide();
    
    this.totalSlides = Math.ceil(this.testimonialData.length / this.cardsPerSlide);
    this.slideIndicators = Array.from({ length: this.totalSlides }, (_, i) => i);
    this.currentIndex = Math.min(this.currentIndex, this.totalSlides - 1);
  }

}