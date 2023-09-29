import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AboutAboutusComponent } from './components/about-aboutus/about-aboutus.component';



@NgModule({
  declarations: [
    AboutComponent,
    AboutAboutusComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AboutModule { }
