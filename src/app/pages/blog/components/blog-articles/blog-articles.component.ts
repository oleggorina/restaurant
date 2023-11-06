import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ICardBlog } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { fromBottom } from 'src/app/services/animations.const';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.scss'],
  animations: [
    trigger('items', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      state('out', style({opacity: 0, transform: 'translateY(30px)'})),
      transition('in => out', animate(`0.3s ease-out`)),
      transition('out => in', animate(`0.3s ease-in`)),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30px)' }),
        animate('0.3s', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogArticlesComponent implements OnInit, OnDestroy {
  @ViewChild('articlesComponent') articlesComponent!: ElementRef;
  articleData: ICardBlog[] = [];
  articleDataSubscription!: Subscription;

  itemsPerPage: number = 2;
  currentPage: number = 1;

  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();

  constructor(private blogService: BlogService,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.articleDataSubscription = this.blogService.getArticles().subscribe(data => {
      this.articleData = data;
      this.onResize();
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.articleDataSubscription) this.articleDataSubscription.unsubscribe();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return this.currentPage * this.itemsPerPage;
  }

  get totalPages(): number {
    return Math.ceil(this.articleData.length / this.itemsPerPage);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    if (window.innerWidth <= 768) {
      this.itemsPerPage = 1; 
    } else {
      this.itemsPerPage = 2;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.animationService.onScroll(this.articlesComponent, 200, this.animationStateSubject);
  }
}
