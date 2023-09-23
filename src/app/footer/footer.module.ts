import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ComponentsModule } from '../components/components.module';
import { FooterLeftComponent } from './components/footer-left/footer-left.component';
import { FooterMiddleComponent } from './components/footer-middle/footer-middle.component';
import { FooterRightComponent } from './components/footer-right/footer-right.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    FooterLeftComponent,
    FooterMiddleComponent,
    FooterRightComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
