import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITestimonialCard } from 'src/app/interface/interface';
import { TestimonialsService } from 'src/app/services/testimonials.service';

@Component({
  selector: 'app-chefs-testimonial',
  templateUrl: './chefs-testimonial.component.html',
  styleUrls: ['./chefs-testimonial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChefsTestimonialComponent implements OnInit, OnDestroy {
  testimonialData: ITestimonialCard[] = [];
  testimonialDataSubscription!: Subscription;
  
  constructor(private testimonialService: TestimonialsService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.testimonialDataSubscription = this.testimonialService.getTestimonials().subscribe(data => {
      this.testimonialData = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.testimonialDataSubscription) this.testimonialDataSubscription.unsubscribe();
  }
}
