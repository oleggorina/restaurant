import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBlogComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() date: string = '';
  @Input() summary: string = '';
}
