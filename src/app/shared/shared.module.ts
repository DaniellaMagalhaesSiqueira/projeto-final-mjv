import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
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
];

const components = [
  HeaderComponent,
  FooterComponent,
 
];

@NgModule({
  declarations: [
    ...components,
    MessageDialogComponent,
    ActionDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules,
  ],
  exports: [
    ...components,
    ...materialModules,
  ]
})
export class SharedModule { }
