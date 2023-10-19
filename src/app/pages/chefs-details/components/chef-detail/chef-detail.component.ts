import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ITeamCard } from 'src/app/interface/interface';

@Component({
  selector: 'app-chef-detail',
  templateUrl: './chef-detail.component.html',
  styleUrls: ['./chef-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChefDetailComponent implements OnInit, OnDestroy {
  chefData!: ITeamCard;
  chefDataSubscription!: Subscription;
  
  constructor(private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.chefDataSubscription = this.activatedRoute.data.subscribe(data => {
      this.chefData = data['data'];
      this.changeDetectorRef.detectChanges();
    })
  }

  ngOnDestroy(): void {
    if (this.chefDataSubscription) this.chefDataSubscription.unsubscribe();
  }
}
