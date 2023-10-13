import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryImagesComponent } from './components/gallery-images/gallery-images.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { GalleryReservationComponent } from './components/gallery-reservation/gallery-reservation.component';
import { GalleryFeatureComponent } from './components/gallery-feature/gallery-feature.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GalleryComponent,
    GalleryImagesComponent,
    GalleryReservationComponent,
    GalleryFeatureComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class GalleryModule { }
