import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AboutAboutusComponent } from './components/about-aboutus/about-aboutus.component';
import { AboutCountsComponent } from './components/about-counts/about-counts.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { AboutGalleryComponent } from './components/about-gallery/about-gallery.component';



@NgModule({
  declarations: [
    AboutComponent,
    AboutAboutusComponent,
    AboutCountsComponent,
    AboutTeamComponent,
    AboutGalleryComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AboutModule { }
