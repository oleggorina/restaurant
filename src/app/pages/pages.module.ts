import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { MenuModule } from './menu/menu.module';
import { BookingModule } from './booking/booking.module';
import { GalleryModule } from './gallery/gallery.module';
import { ChefsModule } from './chefs/chefs.module';
import { ChefsDetailsModule } from './chefs-details/chefs-details.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    AboutModule,
    MenuModule,
    BookingModule,
    GalleryModule,
    ChefsModule,
    ChefsDetailsModule
  ]
})
export class PagesModule { }
