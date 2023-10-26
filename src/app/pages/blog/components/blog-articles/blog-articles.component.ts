import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICardBlog } from 'src/app/interface/interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogArticlesComponent implements OnInit, OnDestroy {
  articleData: ICardBlog[] = [];
  articleDataSubscription!: Subscription;

  itemsPerPage: number = 2;
  currentPage: number = 1;

  constructor(private blogService: BlogService,
    private changeDetectorRef: ChangeDetectorRef) {}

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
}
