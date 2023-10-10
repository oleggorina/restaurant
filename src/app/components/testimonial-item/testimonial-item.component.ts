import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-item',
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialItemComponent {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() city: string = '';
  @Input() text: string = '';
}
