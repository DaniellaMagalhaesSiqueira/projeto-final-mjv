import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleModule } from '../article/article.module';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ArticleModule
  ]
})
export class HomeModule { }
