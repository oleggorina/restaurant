import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ICardBlog } from 'src/app/interface/interface';
import { AnimationService } from 'src/app/services/animation.service';
import { fromBottom, fromRight } from 'src/app/services/animations.const';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  animations: [
    fromBottom,
    fromRight
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('detailsComponent') detailsComponent!: ElementRef;
  blogData!: ICardBlog;
  blogDataSubscription!: Subscription;

  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  constructor(private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.blogDataSubscription = this.activatedRoute.data.subscribe(data => {
      this.blogData = data['data'];
      this.changeDetectorRef.detectChanges();
    })
  }

  ngAfterViewInit(): void {
    this.animationStateSubject.next('in');
  }

  ngOnDestroy(): void {
    if (this.blogDataSubscription) this.blogDataSubscription.unsubscribe();
    this.animationStateSubject.next('out');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // this.animationService.onScroll(this.detailsComponent, 1000, this.animationStateSubject);
  }
}
