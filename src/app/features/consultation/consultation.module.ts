import { CommonModule } from '@angular/common';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ConsultationsListComponent } from './components/consultations-list/consultations-list.component';
import { AllConsultationsPageComponent } from './pages/all-consultations-page/all-consultations-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateConsultationComponent } from './pages/create-consultation/create-consultation.component';




@NgModule({
  declarations: [
    ConsultationComponent,
    ConsultationsListComponent,
    AllConsultationsPageComponent,
    CreateConsultationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ConsultationModule { }
