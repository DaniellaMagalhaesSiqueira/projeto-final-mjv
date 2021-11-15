import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultationModule } from './features/consultation/consultation.module';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { UserModule } from './features/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    ConsultationModule,
    UserModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
