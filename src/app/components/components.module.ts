import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPrimaryComponent } from './btn-primary/btn-primary.component';
import { BtnAccentComponent } from './btn-accent/btn-accent.component';
import { BurgerComponent } from './burger/burger.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialsComponent } from './socials/socials.component';
import { BtnFormComponent } from './btn-form/btn-form.component';
import { BannerComponent } from './banner/banner.component';
import { TestimonialCarouselComponent } from './testimonial-carousel/testimonial-carousel.component';
import { TestimonialItemComponent } from './testimonial-item/testimonial-item.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    BtnPrimaryComponent,
    BtnAccentComponent,
    BurgerComponent,
    ProductItemComponent,
    SubtitleComponent,
    TestimonialCardComponent,
    CardBlogComponent,
    ReservationComponent,
    ValidationMessageComponent,
    SocialsComponent,
    BtnFormComponent,
    BannerComponent,
    TestimonialCarouselComponent,
    TestimonialItemComponent,
    TeamCardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BtnPrimaryComponent,
    BtnAccentComponent,
    BurgerComponent,
    ProductItemComponent,
    SubtitleComponent,
    TestimonialCardComponent,
    CardBlogComponent,
    ReservationComponent,
    ValidationMessageComponent,
    SocialsComponent,
    BtnFormComponent,
    BannerComponent,
    TestimonialCarouselComponent,
    TestimonialItemComponent,
    TeamCardComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
