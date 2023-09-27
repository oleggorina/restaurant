import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Subscription } from 'rxjs';
import { ICardBlog } from 'src/app/interface/interface';
import { BlogService } from 'src/app/services/blog.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBlogComponent implements OnInit, AfterViewInit, OnDestroy {

  articles: ICardBlog[] = [];
  articlesSubscription!: Subscription;

  @ViewChildren('blogItems') blogItems!: QueryList<ElementRef>;
  timeOut: any;

  constructor(private blogService: BlogService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.articlesSubscription = this.blogService.getArticles().subscribe(data => {
      this.articles = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngAfterViewInit(): void {
    this.timeOut = setTimeout(() => {
      this.initAnimation();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.articlesSubscription) this.articlesSubscription.unsubscribe();
    clearTimeout(this.timeOut);
  }
  
  initAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.blogItems.forEach((item: ElementRef) => {
      const element = item.nativeElement;
      gsap.from(element, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: true
        }
      })
    })
  }
}
