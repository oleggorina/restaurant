import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ICardBlog } from 'src/app/interface/interface';
import { BlogService } from 'src/app/services/blog.service';
import { AnimationService } from 'src/app/services/animation.service';
import { fromBottom } from 'src/app/services/animations.const';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss'],
  animations: [
    fromBottom
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBlogComponent implements OnInit, OnDestroy {

  articles: ICardBlog[] = [];
  articlesSubscription!: Subscription;

  @ViewChild('blogComponent') blogComponent!: ElementRef;
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private blogService: BlogService,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.articlesSubscription = this.blogService.getArticles().subscribe(data => {
      this.articles = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.articlesSubscription) this.articlesSubscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  OnScroll() {
    this.animationService.onScroll(this.blogComponent, 200, this.animationStateSubject);
  }

}
