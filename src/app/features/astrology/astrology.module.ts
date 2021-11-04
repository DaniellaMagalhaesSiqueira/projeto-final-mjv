import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentCardComponent } from './components/appointment-card/appointment-card.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';



@NgModule({
  declarations: [
    AppointmentCardComponent,
    AppointmentsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AstrologyModule { }
