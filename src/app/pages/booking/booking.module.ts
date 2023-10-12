import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { BookingComponent } from './booking.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingChoiseComponent } from './components/booking-choise/booking-choise.component';



@NgModule({
  declarations: [
    BookingComponent,
    BookingFormComponent,
    BookingChoiseComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
