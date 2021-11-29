import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/shared/dialogs/action-dialog/action-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user?: User;

  constructor(
    private userService: UserService, 
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  removeUser(id: number): void {
    const dialogRef = this.dialog.open(ActionDialogComponent, {
      width: '300px',
      data: {
        message: 'Tem certeza que deseja excluir o usuário?', titleDialog: 'Excluir Usuário'
      },
    });
    dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result:${result}`);
      if (result) {
        this.userService.removeUser(id);
      }
    });
  }


}

