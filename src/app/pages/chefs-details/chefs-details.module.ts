import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefsDetailsComponent } from './chefs-details.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChefDetailComponent } from './components/chef-detail/chef-detail.component';
import { ChefVideoComponent } from './components/chef-video/chef-video.component';



@NgModule({
  declarations: [
    ChefsDetailsComponent,
    ChefDetailComponent,
    ChefVideoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ChefsDetailsModule { }
