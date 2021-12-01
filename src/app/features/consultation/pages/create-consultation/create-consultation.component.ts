import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consultation } from '../../models/consultation.model';
import { ConsultationService } from '../../services/consultation.service';

@Component({
  templateUrl: './create-consultation.component.html',
  styleUrls: ['./create-consultation.component.scss']
})
export class CreateConsultationComponent implements OnInit {

  consultation: Consultation = this.consultationService.getDefaultConsultation();
  consultationForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private consultationService: ConsultationService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.consultationForm = this.formBuilder.group({
      professional: new FormControl('',[Validators.required]),
      imageUrl: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      theme: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      price: new FormControl(''),
    });
  }

  onSubmit(){
    const formValue = this.consultationForm.value;
    this.consultation.professional = formValue.professional; 
    if(formValue.imageUrl.includes('.jpg')){
      this.consultation.imageUrl = formValue.imageUrl;
    }else{
      this.consultation.imageUrl = 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg';
    }
    this.consultation.description = formValue.description; 
    this.consultation.theme = formValue.theme; 
    this.consultation.contact = formValue.contact; 
    this.consultation.price = formValue.price; 
    this.consultationService.createConsultation(this.consultation);
    this.router.navigateByUrl("all-consultations");
  }

}
