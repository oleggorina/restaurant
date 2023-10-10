import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MenuStartersComponent } from './components/menu-starters/menu-starters.component';
import { MenuImageComponent } from './components/menu-image/menu-image.component';
import { MenuMainDishComponent } from './components/menu-main-dish/menu-main-dish.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenuStartersComponent,
    MenuImageComponent,
    MenuMainDishComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class MenuModule { }
