import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITestimonialCard } from 'src/app/interface/interface';
import { TestimonialsService } from 'src/app/services/testimonials.service';

@Component({
  selector: 'app-about-testimonials',
  templateUrl: './about-testimonials.component.html',
  styleUrls: ['./about-testimonials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTestimonialsComponent implements OnInit {
  testimonialData: ITestimonialCard[] = [];
  testimonialSubscription!: Subscription;

  constructor(private testimonialService: TestimonialsService,
    private changeDetectionRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.testimonialSubscription = this.testimonialService.getTestimonials().subscribe(data => {
      this.testimonialData = data;
      this.changeDetectionRef.detectChanges();
    })
  }
}
