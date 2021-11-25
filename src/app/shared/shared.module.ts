
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageDialogComponent } from './dialogs/message-dialog/message-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { ActionDialogComponent } from './dialogs/action-dialog/action-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CpfPipe } from './pipes/cpf.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AccountComponent } from './components/account/account/account.component';
import { ManagerComponent } from './components/manager/manager/manager.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

const materialModules = [
  MatDialogModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatRippleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatGridListModule,
  MatStepperModule,
  MatSidenavModule,
  MatListModule,
];

const components = [
  HeaderComponent,
  FooterComponent,
 
];

const pipes = [
  CpfPipe,
];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    MessageDialogComponent,
    ActionDialogComponent,
    AccountComponent,
    ManagerComponent, 
 

  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules,


  ],
  exports: [
    ...components,
    ...materialModules,

    CpfPipe,
  ]
})
export class SharedModule { }
