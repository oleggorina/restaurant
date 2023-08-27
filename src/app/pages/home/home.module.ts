import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeAboutComponent } from './components/home-about/home-about.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { HomeTestimonialsComponent } from './components/home-testimonials/home-testimonials.component';
import { HomeParallaxComponent } from './components/home-parallax/home-parallax.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeAboutComponent,
    HomeMenuComponent,
    HomeTestimonialsComponent,
    HomeParallaxComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }
