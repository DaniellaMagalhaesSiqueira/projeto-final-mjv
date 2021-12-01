import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Consultation } from '../models/consultation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

   private consultations = new BehaviorSubject<Consultation[]>([
    { 
      id:1, 
      isUser: true,
      professional: 'Ionne', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150, 
      contact: 'ionne@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:2, 
      isUser: true,
      professional: 'Vera Lúcia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150, 
      contact: 'veralucia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:3, 
      isUser: false,
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:4, 
      isUser: false,
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:5, 
      isUser: false,
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:6, 
      isUser: false,
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:7, 
      isUser: false,
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:8, 
      isUser: false,
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
  ]);

  constructor() { }

  generateNextId(): number{
    return this.getConsultations()[(this.getConsultations().length - 1)].id + 1;
  }

  getDefaultConsultation(): Consultation {
    return {
      id: this.generateNextId(),
      isUser: false,
      professional: '',
      theme: '',
      description: '',
      price: 0,
      contact: '',
      imageUrl: '',
    }
  }

  createConsultation(consultation: Consultation){
    this.getConsultations().push(consultation);
    this.consultations.next(this.getConsultations());
    return this.consultations;
  }

  getConsultations(){
    return this.consultations.getValue();
  }
  getConsultationsStream(){
    return this.consultations.asObservable();
  }

  getConsultationById(id: number){
    return this.getConsultations().find((consultation) => consultation.id === Number(id));
  }


}
