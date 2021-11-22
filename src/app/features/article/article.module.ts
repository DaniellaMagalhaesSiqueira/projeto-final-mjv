import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { NgModule } from '@angular/core';
import { ArticleDetailPageComponent } from './pages/article-detail-page/article-detail-page.component';
import { AllArticlesPageComponent } from './pages/all-articles-page/all-articles-page.component';
import { CreateArticlePageComponent } from './pages/create-article-page/create-article-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentModule } from '../comment/comment.module';




@NgModule({
  declarations: [
    ArticleComponent,
    ArticleCardComponent,
    ArticleListComponent,
    ArticleDetailPageComponent,
    AllArticlesPageComponent,
    CreateArticlePageComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CommentModule,
  ],
  exports: [
    ArticleListComponent,
  ]
})
export class ArticleModule { }
