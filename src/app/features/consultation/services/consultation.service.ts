import { Injectable } from '@angular/core';
import { Consultation } from '../models/consultation.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  consultations: Array<Consultation> = [
    { 
      id:1, 
      professional: 'Ionne', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150, 
      contact: 'ionne@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:2, 
      professional: 'Vera Lúcia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150, 
      contact: 'veralucia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:1, 
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:1, 
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:1, 
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:1, 
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:1, 
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
    { 
      id:1, 
      professional: 'Cíntia', 
      theme: 'Astrologia', 
      description: 'Conultas on-line',
      price: 150,  
      contact: 'cintia@gmail.com',
      imageUrl: 'https://cdn.w600.comps.canstockphoto.com.br/mulher-usu%C3%A1rio-femininas-%C3%ADcone-cliparte-vetor_csp37856004.jpg',
    },
  ];

  constructor() { }

  generateNextId(): number{
    return this.consultations[(this.consultations.length - 1)].id + 1;
  }

  getDefaultConsultation(): Consultation {
    return {
      id: this.generateNextId(),
      professional: '',
      theme: '',
      description: '',
      price: 0,
      contact: '',
      imageUrl: '',
    }
  }

  createConsultation(consultation: Consultation){
    this.consultations.push(consultation);
    return this.consultations;
  }

  getConsultations(){
    return this.consultations;
  }

  getConsultationById(id: number){
    return this.consultations.find((consultation) => consultation.id === Number(id));
  }

  // getConsultationFilterProfessional(professional: string){
  //   return this.consultations.filter((consultation) => 
  //     consultation.professional.toLowerCase().search(professional.toLowerCase()) > -1);
  // }

  // getConsultationFilterId(id: number){
  //   const consultation = this.getConsultationById(Number(id));
  //   if(!consultation){
  //     return [];
  //   }
  //   return [consultation];
  // }
}
