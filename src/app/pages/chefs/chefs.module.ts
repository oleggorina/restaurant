import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefsComponent } from './chefs.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChefsTeamComponent } from './components/chefs-team/chefs-team.component';



@NgModule({
  declarations: [
    ChefsComponent,
    ChefsTeamComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ChefsModule { }
