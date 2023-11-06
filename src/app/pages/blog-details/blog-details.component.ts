import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ICardBlog } from 'src/app/interface/interface';
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
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.blogDataSubscription = this.activatedRoute.data.subscribe(data => {
      this.blogData = data['data'];
      this.changeDetectorRef.detectChanges();
    })
  }

  ngAfterViewInit(): void {
    this.animationStateSubject.next('in');
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.blogDataSubscription) this.blogDataSubscription.unsubscribe();
    this.animationStateSubject.next('out');
  }
}
