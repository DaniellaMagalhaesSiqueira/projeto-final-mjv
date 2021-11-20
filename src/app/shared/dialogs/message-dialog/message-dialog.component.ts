
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogMessage{
  message: string;
  titleMessage: 'Mensagem'
}


@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogMessage) { }

  ngOnInit(): void {
  }

}
