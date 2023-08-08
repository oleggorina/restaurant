import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
