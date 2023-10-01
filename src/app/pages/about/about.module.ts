import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AboutAboutusComponent } from './components/about-aboutus/about-aboutus.component';
import { AboutCountsComponent } from './components/about-counts/about-counts.component';



@NgModule({
  declarations: [
    AboutComponent,
    AboutAboutusComponent,
    AboutCountsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AboutModule { }
