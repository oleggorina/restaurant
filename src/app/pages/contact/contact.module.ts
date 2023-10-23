import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactVisitComponent } from './components/contact-visit/contact-visit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactComponent,
    ContactInfoComponent,
    ContactVisitComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
