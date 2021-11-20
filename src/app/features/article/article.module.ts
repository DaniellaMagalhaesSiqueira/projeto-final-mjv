import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { NgModule } from '@angular/core';




@NgModule({
  declarations: [
    ArticleComponent,
    ArticleCardComponent,
    ArticleListComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ArticleListComponent,
  ]
})
export class ArticleModule { }
