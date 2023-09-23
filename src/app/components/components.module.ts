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
import { ReservationComponent } from './reservation/reservation.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialsComponent } from './socials/socials.component';
import { BtnFormComponent } from './btn-form/btn-form.component';


@NgModule({
  declarations: [
    BtnPrimaryComponent,
    BtnAccentComponent,
    BurgerComponent,
    ProductItemComponent,
    SubtitleComponent,
    TestimonialCarouselComponent,
    TestimonialCardComponent,
    CardBlogComponent,
    ReservationComponent,
    ValidationMessageComponent,
    SocialsComponent,
    BtnFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BtnPrimaryComponent,
    BtnAccentComponent,
    BurgerComponent,
    ProductItemComponent,
    SubtitleComponent,
    TestimonialCarouselComponent,
    TestimonialCardComponent,
    CardBlogComponent,
    ReservationComponent,
    ValidationMessageComponent,
    SocialsComponent,
    BtnFormComponent
  ]
})
export class ComponentsModule { }
