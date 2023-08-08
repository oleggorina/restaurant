import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPrimaryComponent } from './btn-primary/btn-primary.component';
import { BtnAccentComponent } from './btn-accent/btn-accent.component';
import { BurgerComponent } from './burger/burger.component';



@NgModule({
  declarations: [
    BtnPrimaryComponent,
    BtnAccentComponent,
    BurgerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnPrimaryComponent,
    BtnAccentComponent,
    BurgerComponent
  ]
})
export class ComponentsModule { }
