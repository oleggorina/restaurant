import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefsComponent } from './chefs.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChefsTeamComponent } from './components/chefs-team/chefs-team.component';
import { ChefsTestimonialComponent } from './components/chefs-testimonial/chefs-testimonial.component';
import { ChefsSkillComponent } from './components/chefs-skill/chefs-skill.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ChefsComponent,
    ChefsTeamComponent,
    ChefsTestimonialComponent,
    ChefsSkillComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class ChefsModule { }
