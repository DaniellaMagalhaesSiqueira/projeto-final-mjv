import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/shared/dialogs/action-dialog/action-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user?: User;
  
  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  // remove(id: number | undefined){
  //   if(id){
  //     const selectedUser = this.userService.getUserById(id);
  //     this.userService.removeUser(id);
  //     this.dialog.open(ActionDialogComponent, {
  //       data: {
  //         message: `Tem certeza que deseja excluir o usuário ${selectedUser?.name}?`,
  //         titleDialog: 'Exclusão de usuário:'
  //       }
  //     });
  //   }
  // }

    removeUser(id: number | undefined): void {
      const dialogRef = this.dialog.open(ActionDialogComponent, {
        width: '250px',
        data: {
          message: 'Tem certeza que deseja excluir o usuário?', titleDialog: 'Excluir Usuário'
        },
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if(result){
          if(id){
            this.userService.removeUser(id);
          }
        }
      });
    }
  

  }

