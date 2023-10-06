import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialCardComponent {
  @Input() name: string = '';
  @Input() city: string = '';
  @Input() image: string = '';
  @Input() testimonial: string = '';
  @Input() isCard: boolean = false;
}
