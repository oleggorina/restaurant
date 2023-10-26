import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICardBlog } from 'src/app/interface/interface';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailsComponent implements OnInit, OnDestroy {
  blogData!: ICardBlog;
  blogDataSubscription!: Subscription;
  
  constructor(private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.blogDataSubscription = this.activatedRoute.data.subscribe(data => {
      this.blogData = data['data'];
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.blogDataSubscription) this.blogDataSubscription.unsubscribe();
  }
}
