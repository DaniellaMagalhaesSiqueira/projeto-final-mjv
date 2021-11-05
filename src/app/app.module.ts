import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultationModule } from './features/consultation/consultation.module';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    ConsultationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
