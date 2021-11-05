import { Component, Input, OnInit } from '@angular/core';
import { Consultation } from '../../models/consultation.model';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  @Input()
  consultation?: Consultation;

  constructor() { }

  ngOnInit(): void {
  }

}
