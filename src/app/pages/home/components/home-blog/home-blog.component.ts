import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICardBlog } from 'src/app/interface/interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBlogComponent implements OnInit, OnDestroy {

  articles: ICardBlog[] = [];
  articlesSubscription!: Subscription;

  constructor(private blogService: BlogService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.articlesSubscription = this.blogService.getArticles().subscribe(data => {
      this.articles = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.articlesSubscription) this.articlesSubscription.unsubscribe();
  }
}
