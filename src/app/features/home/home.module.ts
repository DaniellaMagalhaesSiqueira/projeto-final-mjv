import { AppModule } from './../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class HomeModule { }
