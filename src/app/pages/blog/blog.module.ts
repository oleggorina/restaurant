import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { BlogArticlesComponent } from './components/blog-articles/blog-articles.component';



@NgModule({
  declarations: [
    BlogComponent,
    BlogArticlesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class BlogModule { }
