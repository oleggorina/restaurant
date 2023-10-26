import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsComponent } from './blog-details.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class BlogDetailsModule { }
