import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { ITestimonialCard } from 'src/app/interface/interface';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialCarouselComponent implements AfterViewInit {
  @Input() data: ITestimonialCard[] = [];
  @ViewChild('container') container!: ElementRef;
  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('carouselItem') carouselItem!: ElementRef;

  currentIndex: number = 0;
  cardWidthValue: string = '';
  carouselHeightValue: string = '';

  constructor(private carouselService: CarouselService,
    private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.onResize();
  }

  next(): void {
    this.carouselService.goNext(
      this.carousel.nativeElement,
      this.carouselItem.nativeElement,
      1,
      this.currentIndex,
      this.data.length,
      this.renderer
    )
    if (this.currentIndex < (this.data.length - 1)) this.currentIndex++;
    console.log('next')
  }

  prev(): void {
    this.carouselService.goPrev(
      this.carousel.nativeElement,
      this.carouselItem.nativeElement,
      1,
      this.currentIndex,
      this.renderer
    )
    if (this.currentIndex > 0) this.currentIndex--;
  }

  getWidthCard(): string | any {
    return `${this.container.nativeElement.offsetWidth}px`;
  }

  private setWidthValue(): void {
    this.cardWidthValue = this.getWidthCard();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    this.getWidthCard();
    this.setWidthValue();
  }
}
