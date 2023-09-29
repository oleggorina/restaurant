import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Subscription } from 'rxjs';
import { ICardBlog } from 'src/app/interface/interface';
import { BlogService } from 'src/app/services/blog.service';
import { gsap } from 'gsap';
import { AnimationService } from 'src/app/services/animation.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBlogComponent implements OnInit, OnDestroy {

  articles: ICardBlog[] = [];
  articlesSubscription!: Subscription;

  @ViewChildren('blogItems') blogItems!: QueryList<ElementRef>;

  constructor(private blogService: BlogService,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.articlesSubscription = this.blogService.getArticles().subscribe(data => {
      this.articles = data;
      this.changeDetectorRef.detectChanges();
      this.initAnimation();
    })
  }

  ngOnDestroy(): void {
    if (this.articlesSubscription) this.articlesSubscription.unsubscribe();
  }
  
  initAnimation(): void {
    this.blogItems.forEach((item) => {
      const element = item.nativeElement;
      this.animationService.animateFadeInFromBottom(element);
    })
  }
}
