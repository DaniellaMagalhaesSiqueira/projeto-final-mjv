import { Component, Input, OnInit } from '@angular/core';
import { Consultation } from '../../models/consultation.model';

@Component({
  selector: 'app-consultations-list',
  templateUrl: './consultations-list.component.html',
  styleUrls: ['./consultations-list.component.scss']
})
export class ConsultationsListComponent implements OnInit {

  @Input()
  consultations: Array<Consultation> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
