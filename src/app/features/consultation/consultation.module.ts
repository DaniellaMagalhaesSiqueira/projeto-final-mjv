import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ConsultationsListComponent } from './components/consultations-list/consultations-list.component';
import { AllConsultationsPageComponent } from './pages/all-consultations-page/all-consultations-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConsultationComponent,
    ConsultationsListComponent,
    AllConsultationsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class ConsultationModule { }
