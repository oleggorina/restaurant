import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPrimaryComponent } from './btn-primary/btn-primary.component';
import { BtnAccentComponent } from './btn-accent/btn-accent.component';
import { BurgerComponent } from './burger/burger.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { TestimonialCarouselComponent } from './testimonial-carousel/testimonial-carousel.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { CardBlogComponent } from './card-blog/card-blog.component';



@NgModule({
  declarations: [
    BtnPrimaryComponent,
    BtnAccentComponent,
    BurgerComponent,
    ProductItemComponent,
    SubtitleComponent,
    TestimonialCarouselComponent,
    TestimonialCardComponent,
    CardBlogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnPrimaryComponent,
    BtnAccentComponent,
    BurgerComponent,
    ProductItemComponent,
    SubtitleComponent,
    TestimonialCarouselComponent,
    TestimonialCardComponent,
    CardBlogComponent
  ]
})
export class ComponentsModule { }
